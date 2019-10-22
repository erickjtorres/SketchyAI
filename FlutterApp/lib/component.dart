class Component {
  String widget;
  List<Component> children;
  Map extras;

  Component({this.widget, this.children, this.extras});

  @override
  String toString() {
    return 'Component{\n \tWidget: $widget, \n\t\t\t children: $children}';
  }


}

