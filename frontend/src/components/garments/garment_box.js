import React from 'react';

class GarmentBox extends React.Component {
  render() {
    return (
        <div>
        <h3>One {this.props.color} {this.props.type} named {this.props.name}.</h3>
        </div>
    );
  }
}

export default GarmentBox;
