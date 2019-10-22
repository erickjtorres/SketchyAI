import numpy as np
import cv2
from darkflow.net.build import TFNet
import base64

def remove_transparency(im, bg_colour=(255, 255, 255)):

    # Only process if image has transparency (http://stackoverflow.com/a/1963146)
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):

        # Need to convert to RGBA if LA format due to a bug in PIL (http://stackoverflow.com/a/1963146)
        alpha = im.convert('RGBA').split()[-1]

        # Create a new background image of our matt color.
        # Must be RGBA because paste requires both images have the same format
        # (http://stackoverflow.com/a/8720632  and  http://stackoverflow.com/a/9459208)
        bg = Image.new("RGBA", im.size, bg_colour + (255,))
        bg.paste(im, mask=alpha)
        return bg

    else:
        return im

def training(imgstring, tfnet2):
    label_arr = []
  
    imgdata = base64.b64decode(imgstring)
    filename = 'some_image_new.png'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(imgdata)
    f.close()
  
    im = Image.open("some_image_new.png")
    im = remove_transparency(im)
	rgb_im = im.convert('RGB')
	rgb_im.save('some_image_new.jpg')
  

	original_img = cv2.imread('some_image_new.jpg')
# original_img = cv2.cvtColor(original_img, cv2.COLOR_BGR2RGB)
	results = tfnet2.return_predict(original_img)
	for label in results:
    	if label['confidence'] > 0.2:
        	label_arr.append(label)
    return label_arr


def renderUI(output):
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
                            app_widgets.append(dict1['label'])          
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
                app_widgets.append(dict0['label'])

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

    for widget in app_widgets:
        app_ref.document('app_widgets').set({
            'appbar': 'appbar' in app_widgets,
            'floatingactionbutton': 'floatingactionbutton' in app_widgets,
            'sidebar': 'sidebar' in app_widgets,
        })
  