import React, { Component } from 'react';
import {SketchField, Tools} from 'react-sketch';
import axios from 'axios';

class SketchFieldMobile extends Component {
    sketch = React.createRef();


    // Will run the function after the state of a component changes
    componentDidUpdate(prevProps, prevState, snapshot) {

        axios.post('https://cbd56919.ngrok.io/updateUI', {
            foo: this.sketch.current.toDataURL()
        });

        // console.log(this.sketch.current.toDataURL());
      }

    render() {

   
       return (
           <>
           <text>{this.props.add}</text>
           <SketchField 
           ref={this.sketch}
           style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
          }} 
                        className="Field"
                        width='375px' 
                        height='667px' 
                        tool={Tools.Pencil} 
                        lineColor={this.props.attributes}
                        lineWidth={this.props.lineWidth}
                        backgroundColor='255'
                        imageFormat='jpeg'
                        />
                        </>
                        
       )
    }
  }

  export default SketchFieldMobile