import React from 'react';
import './garment_box.css'


class GarmentBox extends React.Component {
  render() {
    return (
        <div >
          <div >
            <div>{this.props.color} {this.props.type} called {this.props.name}.</div>
          </div>
        </div>
    );
  }
}

export default GarmentBox;
