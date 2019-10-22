import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('vandykey.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

output = [{'label': 'text', 'confidence': 0.28543407, 'topleft': {'x': 0, 'y': 291}, 'bottomright': {'x': 235, 'y': 452}},
{'label': 'text', 'confidence': 0.11161788, 'topleft': {'x': 0, 'y': 586}, 'bottomright': {'x': 198, 'y': 729}},
{'label': 'textfield', 'confidence': 0.16267988, 'topleft': {'x': 235, 'y': 593}, 'bottomright': {'x': 741, 'y': 742}},
{'label': 'text', 'confidence': 0.095825784, 'topleft': {'x': 116, 'y': 779}, 'bottomright': {'x': 301, 'y': 955}},
{'label': 'text', 'confidence': 0.40040737, 'topleft': {'x': 503, 'y': 797}, 'bottomright': {'x': 696, 'y': 912}},
{'label': 'button', 'confidence': 0.17572533, 'topleft': {'x': 429, 'y': 775}, 'bottomright': {'x': 749, 'y': 949}},
{'label': 'appbar', 'confidence': 0.31654927, 'topleft': {'x': 74, 'y': 0}, 'bottomright': {'x': 749, 'y': 146}},
{'label': 'textfield', 'confidence': 0.09217384, 'topleft': {'x': 215, 'y': 288}, 'bottomright': {'x': 749, 'y': 434}},
{'label': 'button', 'confidence': 0.11535523, 'topleft': {'x': 64, 'y': 761}, 'bottomright': {'x': 341, 'y': 971}}]
# output = [
# {'label': 'button', 'confidence': 0.67056483, 'topleft': {'x': 430, 'y': 50}, 'bottomright': {'x': 1304, 'y': 726}},
# {'label': 'text', 'confidence': 0.46804085, 'topleft': {'x': 230, 'y': 50}, 'bottomright': {'x': 906, 'y': 249}},
# ]

#Add ids into dictionaries
edited_output = []
body_widgets = []
app_widgets = []
already_added = set()
should_remove = set()

id =0
for dict in output:
    edited_output.append(
        {
            'id':id,
            'label': dict['label'],
            'topleft': dict['topleft'],
            'bottomright': dict['bottomright'],
        }
    )
    id +=1

outer_index = 0
#For each id 
for dict0 in edited_output:
    row_widget = []
    if not (dict0['id'] in already_added):
        #check to see if there are any widgets that are in the same row with 
        inner_index =0

        for dict1 in edited_output:
            #if not what we're currently looking at
            if inner_index != outer_index:
                #check if the absolute value of y is < 50, if it is than it's in row
                if dict1['id'] not in already_added and abs(dict1['topleft']['y'] - dict0['topleft']['y']) <= 50:
                    already_added.add(dict1['id']) #mark as already added
                    if not (dict1['label']=='appbar' or dict1['label']=='floatingactionbutton' or dict1['label']=='sidebar'):
                        row_widget.append(dict1)
                        # if button, check to see if it has a text as a child
                        if dict1['label'] == 'button':
                            dict1['hasText'] = False
                            for dict2 in edited_output:
                                if dict2['label'] == 'text':
                                    #this text is a child
                                    if (dict1['topleft']['x'] < dict2['topleft']['x'] and dict1['bottomright']['x'] > dict2['bottomright']['x']) and (dict1['topleft']['y'] < dict2['topleft']['y'] and dict1['bottomright']['y'] > dict2['bottomright']['y']):
                                        dict1['hasText'] = True
                                        should_remove.add(dict2['id'])
                                        break
                    else:
                        app_widgets.append(dict1)          
            inner_index +=1
        
        already_added.add(dict0['id'])
        if not (dict0['label']=='appbar' or dict0['label']=='floatingactionbutton' or dict0['label']=='sidebar'):
            row_widget.append(dict0)
            # if button, check to see if it has a text as a child
            if dict0['label'] == 'button':
                dict0['hasText'] = False
                for dict2 in edited_output:
                     if dict2['label'] == 'text':
                        #this text is a child
                        if (dict0['topleft']['x'] < dict2['topleft']['x'] and dict0['bottomright']['x'] > dict2['bottomright']['x']) and (dict0['topleft']['y'] < dict2['topleft']['y'] and dict0['bottomright']['y'] > dict2['bottomright']['y']):
                            dict0['hasText'] = True
                            should_remove.add(dict2['id'])
                            break
        else:
            app_widgets.append(dict0)

        body_widgets.append(
            row_widget
        );

    outer_index +=1

#Remove any unecessary widgets
for row in body_widgets:
    for widg in row:
        if(widg['id'] in should_remove):
            row.remove(widg)

def transform_to_widget(to_transform):
    if(to_transform== 'text'):
        return 'Text'
    elif(to_transform == 'textfield'):
        return 'TextField'
    elif(to_transform == 'button'):
        return 'Button'
    elif(to_transform == 'image'):
        return 'Image'
    elif(to_transform == 'checkbox'):
        return 'Checkbox'
    elif(to_transform == 'switch'):
        return 'Switch'

app_ref = db.collection(u'app')

#order elements in row
tempList = []
for row in body_widgets:
    newlist = sorted(row, key=lambda k: k['topleft']['x']) 
    tempList.append(newlist)

body_widgets = tempList
for row in body_widgets:
    print(row)
    print("\n\n")

#Talk to firebase
row_id = 0
for row in body_widgets:
    if(len(row) > 0):
        widget_id = 0
        app_ref.document(str(row_id)).set({
                u'comp' : u'Row',
                u'distanceToTop': row[0]['topleft']['y'],
                u'distanceFromLeft': row[0]['topleft']['x']
            })
        for row_widget in row:
            if row_widget['label'] == 'button':
                app_ref.document(str(row_id)).collection('children').document(str(widget_id)).set({
                    u'hasText' : row_widget['hasText'],
                    u'comp': transform_to_widget(row_widget['label']).decode()
                })
            else:
                app_ref.document(str(row_id)).collection('children').document(str(widget_id)).set({
                    u'comp': transform_to_widget(row_widget['label']).decode()
                })
            widget_id +=1
        row_id +=1