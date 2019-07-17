import React from 'react';
import ShowBox from './show_box';

class Picker extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          // name: "",
          // color: "white",
          // hot: true,
          // formal: false,
          // wet: false,
          // athleisure: false  ,
          top: {name: 'shirt', color: 'white'},
        pant: { name: 'bottom', color: 'white'}
      }
      document.title = 'pickr @ outfittr'
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentDidMount(){
    this.props.fetchUserTops(this.props.currentUser.id);
    this.props.fetchUserPants(this.props.currentUser.id);
  }
  handleSubmit(e) {
    e.preventDefault();
    let fit = {
      // name: this.state.name,
      // color: this.state.color,
      // hot: this.state.hot,
      // formal: this.state.formal,
      // wet: this.state.wet,
      // athleisure: this.state.athleisure,
      top: {},
      pant: {}
    };

    // this.props.composeFit(fit); 
    // this.setState({name: ''});
    // window.location.reload();
  }
  updateTop() {
    return e => this.setState({
      top: this.props.tops[e.target.value]
    });
  }
  updatePant() {
    return e => this.setState({
      pant: this.props.pants[e.target.value]
    });
  }

  render() {
    let tops=this.props.tops
    let pants=this.props.pants
    //run .filters here!!!!
    return (
      <div className="picker-page">
        <div className="picker-picker">
        <label>
        <h3>Choose a Shirt</h3>
        <select className="picker-menu" 
        // value={this.state.top.name}
        onChange={this.updateTop()}
        >
          {tops.map((top,index) => (
            <option value={index}>{top.name}</option>
            ))}
        </select>
        </label>
        <label>
          <h3>Choose Pants</h3>
          <select className="picker-menu"
            // value={this.state.pant.name}
            onChange={this.updatePant()}
          >
            {pants.map((pant, index) => (
              <option value={index}>{pant.name}</option>
            ))}
          </select>
        </label>
        </div>
        <div className="show-container">
          <span className="show-item">
            <ShowBox
              name={this.state.top.name}
              color={this.state.top.color}
              type="top"
            />
          </span>
          <span className="show-item">
            <ShowBox
              name={this.state.pant.name}
              color={this.state.pant.color}
              type="pant"
            />
          </span>
          
        </div>
      </div>
    )
  }
}

export default Picker;
