import React from 'react';
import GarmentBox from './garment_box';

class AddPant extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
          color: "green",
          hot: true,
          formal: false,
          wet: false,
          athleisure: false,
          newPant: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newPant: nextProps.newPant.text});
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
    this.setState({text: ''});
    this.props.history.push('/profile');

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

  updateCold() {
    return e =>this.setState({
      hot: !e.currentTarget.checked
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
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.updateName()}
                        placeholder="Name your Cloths"
                    />
                    {/* <input type="text"
                        value={this.state.color}
                        onChange={this.updateColor()}
                        placeholder="Pick a color"
                      /> */}
            <select value={this.state.color} onChange={this.updateColor()}>
              <option value="white">white</option> 
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="indigo">indigo</option>
              <option value="violet">violet</option>
              <option value="black">black</option>
	    </select>
                <label>
                  Cold?
                    <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateCold()}
                    checked={!this.state.hot}
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
                <label>
                  Wet? 
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateWet()}
                    checked={this.state.wet}
                  />
                </label>
                <label>
                  Athleisure? 
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateAthleisure()}
                    checked={this.state.athleisure}
                  />
                </label>
              
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
        <GarmentBox name={this.state.name} color={this.state.color} type="pant" />
        </div>
    )
  }
}

export default AddPant;
