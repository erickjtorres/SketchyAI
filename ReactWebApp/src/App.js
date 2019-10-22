import React, { Component} from 'react';
import SketchFieldMobile from './SketchFieldMobile';
import Grid from '@material-ui/core/Grid';
import PersistentDrawerLeft from './PersistentDrawerLeft'
import BodyBackgroundColor from 'react-body-backgroundcolor'
import Login from './login'
import FloatingActionButtonZoom from './FloatingActionButtonZoom'



class App extends Component {

  //The initial state of the application
  state = {
    linecolor: 'blue',
    lineWidth: 4,
    add: 0
  }

//Functions to edit the state
  changeColor = (color) => {
    this.setState({
      linecolor : color,
      lineWidth: 4
    })
  }

  eraser = () => {
    this.setState({
      linecolor: 'white',
      lineWidth: 20
    })
  }

  //A hacky way to add eventListeners and output and image
  handle_this = () => {
    let newnumb = 0;
    if(this.state.add === 0) {
      newnumb = 1;
    } else {
      newnumb = 0;
    }
    this.setState({
      linecolor: this.state.linecolor,
      lineWidth: this.state.lineWidth,
      add: newnumb
    })
  }

  //Adds the event listener
  componentDidMount = function () {
    document.body.addEventListener('click', this.handle_this);
}


  render() {
    return (
    
      <div className="App">
        <Login />
        <BodyBackgroundColor backgroundColor =  '#343D46'>
        <Grid container spacing={24}>
         
          <PersistentDrawerLeft changeColor={this.changeColor} eraser={this.eraser} />
          
          <SketchFieldMobile attributes={this.state.linecolor} lineWidth={this.state.lineWidth} add={this.state.add}/>
  
        </Grid>
        </BodyBackgroundColor>
        <FloatingActionButtonZoom></FloatingActionButtonZoom>
      </div>
    )
  }
}

export default App;