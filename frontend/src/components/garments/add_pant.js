import React from 'react';
import GarmentBox from './boxes/garment_box';
import './add_pant.css'

class AddPant extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
          color: "white",
          hot: false,
          formal: false,
          wet: false,
          athleisure: false,
          newPant: ""
      }
      document.title = 'new pants! outfittr'
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
    this.setState({newPant: nextProps.newPant.text, pants: nextProps.pants});
  }
  componentDidMount() {
    this.props.fetchUserPants(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let pant = {
      name: this.state.name,
      color: this.state.color,
      hot: this.state.hot,
      formal: this.state.formal,
      wet: this.state.wet,
      athleisure: this.state.athleisure
    };
    this.props.composePant(pant);
    this.setState({
      name: '',
      color: "white",
      hot: false,
      formal: false,
      wet: false,
      athleisure: false,
      newPant: ""});
  }

  updateName() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }
  updateColor() {
    return e => this.setState({
      color: e.currentTarget.value
    });
  }

  updateHot() {
    return e =>this.setState({
      hot: e.currentTarget.checked
    });
}
  updateFormal() {
    return e =>this.setState({
      formal: e.currentTarget.checked
    });
}
  updateWet() {
    return e =>this.setState({
      wet: e.currentTarget.checked
    });
}
  updateAthleisure() {
    return e =>this.setState({
      athleisure: e.currentTarget.checked
    });
}

  render() {
    return (
        <div className="create-page">
          <div className="create-form">
            <form onSubmit={this.handleSubmit}>
                    <input type="text"
                      className="clothing-input"
                      value={this.state.name}
                      onChange={this.updateName()}
                      placeholder="item name"
                      required
                      />
            <select className="garment-checkbox" className="color-btn" value={this.state.color} onChange={this.updateColor()}>
              <option value="white">white</option> 
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">khaki</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="pink">pink</option>
              <option value="violet">violet</option>
              <option value="black">black</option>
	          </select>
            <div className="radios">
              <div className="form-left">
                <label>
                  Hot?
                    <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateHot()}
                    checked={this.state.hot}
                  />
                </label>
                <label>
                  Formal?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateFormal()}
                    checked={this.state.formal}
                  />
                </label>
              </div>
              <div className="form-right">
                <label>
                  Athleisure?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateAthleisure()}
                    checked={this.state.athleisure}
                  />
                </label>
                <label>
                  Rain?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateWet()}
                    checked={this.state.wet}
                  />
                </label>
              </div>
                </div>
                    <input className="add-submit-btn" type="submit" value="Save to Wardrobe" />
              </form>
            </div>
          <br />
            <div className="garment-container">
              <div className="demo-item">
                <GarmentBox 
                  name={this.state.name} 
                  color={this.state.color} 
                  type="pant" 
                />
              </div>
            <br />
              {this.props.pants.map(pant => (
                <div className="garment-item">  
                  <GarmentBox
                  key={pant._id}
                  name={pant.name}
                  color={pant.color}
                  type="pant"
                  />
                </div>  
            ))}
          </div>
        </div>
    )
  }
}

export default AddPant;
