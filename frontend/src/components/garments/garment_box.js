import React from 'react';
import './garment_box.css'


class GarmentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssClass: ''
    }
  }

  componentDidMount(){
    this.setState({
    cssClass: `${this.props.color}-${this.props.type}`
    })
  }

  render() {
    return (
      <div className={this.state.cssClass}>
          <div > {this.props.type} called {this.props.name}.</div>
        </div>
    );
  }
}

export default GarmentBox;
