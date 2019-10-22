import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'component.dart';

void main() async {

  runApp(new MyApp());
}

class MyApp extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return MyAppState();
  }
}

class MyAppState extends State<MyApp> {
  bool hasAppBar;
  bool hasDrawer;
  bool hasFloatingActionButton;
  final Firestore _f = Firestore.instance;

  int i;

  @override
  void initState() {
    hasAppBar = null;
    hasDrawer = null;
    hasFloatingActionButton = null;
    i =0;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: hasAppBar == null ? null : AppBar(title: Text('My Great App'), backgroundColor: Colors.blue,),
        floatingActionButton: hasFloatingActionButton == null ? null : FloatingActionButton(onPressed: (){},),
        drawer: hasDrawer == null ? null : Drawer(),
        body: StreamBuilder(
          stream: _f.collection('app').snapshots(),
          builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
            if(!snapshot.hasData) return Text('');
            return FutureBuilder(
              future: getDocs(snapshot),
              builder: (BuildContext context , AsyncSnapshot<List<Component>> appChildren){
                if(!appChildren.hasData) return Center(child: CircularProgressIndicator(),);
                //debugPrint("${appChildren.data.toString()}");
                // turn each component to widget
                List<Widget> bodyWidgets = [];
                for(Component comp in appChildren.data){
                    bodyWidgets.add(
                      buildWidget(comp)
                    );
                }
//                for(Container cont in bodyWidgets){
//                  debugPrint(cont.child.children.toString());
//                }
                //display each component
                return Container(
                  margin: EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
                  child: ListView(
                    children: bodyWidgets,
                  ),
                );

              },
            );
          },
        ),
      ),
    );
  }

  Widget buildWidget(Component comp){
    //has only one child
    if(comp.children.length == 0 ){
      if(comp.widget == "Button"){
        return renderSingleWidget(widget: comp.widget , extras:{'hasText':comp.extras['hasText']});

      }
      else if(comp.widget == "TextField"){
        return Flexible(
          child: Container(
            margin: EdgeInsets.symmetric(horizontal: 10.0),
            child: renderSingleWidget(widget: comp.widget),
          ),
        );
      }
      else{
        return renderSingleWidget(widget: comp.widget);
      }
    }
    else{
      //has children
      List<Widget> children = [];
      for(Component vcomp in comp.children){
        children.add(
          buildWidget(vcomp)
        );
      }
      if(comp.widget == 'Row'){
        return renderMultipleWidget(widget: comp.widget, children: children, demensions: comp.extras['demensions']);
      }else{
        return renderMultipleWidget(widget: comp.widget, children: children);
      }
    }
  }

  Widget renderSingleWidget({String widget, Map extras}){
    switch(widget){
      case  "Button": {
        return RaisedButton(
          child: extras['hasText'] ? Text('Your Text Here') : Text(''),
          color: Colors.blue,
          onPressed: (){},
        );
      }
      break;

      case  "TextField": {
        return TextField(
          decoration: InputDecoration(
              labelText: 'Your Input Here'
          ),
        );
      }
      break;

      case  "Text": {
        return Text(
          'This is a text'
        );
      }
      break;

      case  "Image": {
        return Container(
          color: Colors.lightBlue,
          child: Center(
            child: Text('This is an image'),
          ),
        );
      }
      break;

      case  "Switch": {
        return Switch(
          value: true,
          onChanged: (_){},
        );
      }
      break;

      case  "Checkbox": {
        return Checkbox(
          value: true,
          onChanged: (_){},
        );
      }
      break;

      default: {
        return Center(child: Text("Cannot Render Widget"),);
      }
      break;

    }
  }

  Widget renderMultipleWidget({String widget, List<Widget> children, List demensions}){
    switch(widget){
      case  "Row": {
        return Container(
          margin: EdgeInsets.only(left: (demensions[0] + .0)/7, top: (demensions[1] + .0)/7),
          child: Row(
            mainAxisAlignment:  MainAxisAlignment.spaceEvenly,
            children: children,
          ),
        );
      }
      break;

      case  "Column": {
        return Container(
          child: Column(
            mainAxisAlignment:  MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: children,
          ),
        );
      }
      break;

      default: {
        return Center(child: Text("Cannot Render Widget"),);
      }
      break;

    }
  }

   Future<List<Component>> getDocs(AsyncSnapshot<QuerySnapshot> snapshot) async {
    List<Component> children = [];
    //for each children
    for(DocumentSnapshot doc in snapshot.data.documents){
      if(doc.documentID != "app_widgets"){
        children.add( await makeComp(doc.reference));
      }
    }

    for(DocumentSnapshot doc in snapshot.data.documents){
      if(doc.documentID == "app_widgets"){
        if(doc.exists){
          if( doc.data['appbar'] || doc.data['sidebar'] || doc.data['floatingactionbutton'] ){
            setState(() {
              if(doc.data['appbar']){
                hasAppBar = true;
              }
              if(doc.data['sidebar']){
                hasDrawer = true;
              }
              if(doc.data['floatingactionbutton']){
                hasFloatingActionButton = true;
              }
            });
          }
        }
      }
    }

    return children;
  }

    Future<Component> makeComp(DocumentReference docF) async {
      QuerySnapshot querySnapshot = await docF.collection('children').getDocuments();
      if(querySnapshot.documents.length > 0){ //have children
        List<Component> children = [];
        for(DocumentSnapshot d in querySnapshot.documents){
          children.add(
            await makeComp(d.reference)
          );
        }
        DocumentSnapshot currDoc = await docF.get();
        return Component(
          widget: currDoc.data['comp'], 
          children: children,
          extras: currDoc.data['comp'] == 'Button' ? {
              "hasText": currDoc.data['hasText']
            } : currDoc.data['comp'] == 'Row' ? {'demensions':[currDoc.data['distanceFromLeft'], currDoc.data['distanceToTop']]} : {}
        );
      }
      else{
        DocumentSnapshot currDoc = await docF.get();
        return Component(
          widget: currDoc.data['comp'], 
          children: [],
          extras: currDoc.data['comp'] == 'Button' ? {
              "hasText": currDoc.data['hasText']
            } : currDoc.data['comp'] == 'Row' ? {'demensions':[currDoc.data['distanceFromLeft'], currDoc.data['distanceToTop']]} : {}
          );
      }
  }

}