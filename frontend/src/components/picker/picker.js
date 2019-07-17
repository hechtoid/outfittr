import React from 'react';
import ShowBox from './show_box';
import './picker.css'
class Picker extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          // name: "",
          // color: "white",
          hot: false,
          formal: false,
          wet: false,
          athleisure: false,
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

  updateHot() {
    return e => this.setState({
      hot: e.currentTarget.checked
    });
  }
  updateFormal() {
    return e => this.setState({
      formal: e.currentTarget.checked
    });
  }
  updateWet() {
    return e => this.setState({
      wet: e.currentTarget.checked
    });
  }
  updateAthleisure() {
    return e => this.setState({
      athleisure: e.currentTarget.checked
    });
  }

  render() {
    
    let tops=this.props.tops
    let pants=this.props.pants
    if (this.state.formal){
        pants=pants.filter((ele)=>
        ele.formal)
        tops=tops.filter((ele)=>
        ele.formal)
    }
    if (this.state.wet) {
        pants = pants.filter((ele) =>
        ele.wet)
        tops = tops.filter((ele) =>
        ele.wet)
    }
    if (this.state.hot){
        pants=pants.filter((ele)=>
        ele.hot)
        tops=tops.filter((ele)=>
        ele.hot)
    }
    
    if (this.state.athleisure){
        pants=pants.filter((ele)=>
        ele.athleisure)
        tops=tops.filter((ele)=>
        ele.athleisure)
    }
    return (
      <div className="picker-page">
        <div className="picker-radios">
            <label>
              Hot?
                <input type="checkbox"
                className="picker-checkbox"
                onChange={this.updateHot()}
                checked={this.state.hot}
              />
            </label>
            <label>
              Formal?
                <input type="checkbox"
                className="picker-checkbox"
                onChange={this.updateFormal()}
                checked={this.state.formal}
              />
            </label>
            <label>
              Athleisure?
                  <input type="checkbox"
                className="picker-checkbox"
                onChange={this.updateAthleisure()}
                checked={this.state.athleisure}
              />
            </label>
            <label>
              Rain?
                  <input type="checkbox"
                className="pickr-checkbox"
                onChange={this.updateWet()}
                checked={this.state.wet}
              />
            </label>
         
        </div>
        <div className="picker-picker">
        <label>
        <h3>Top:</h3>
        <select className="picker-menu" 
        // value={this.state.top.name}
        onChange={this.updateTop()}
        size={tops.length+1}
        >
        <option disabled selected value>Select Shirts </option>
          {tops.map((top,index) => (
            <option value={index}>{top.name}</option>
            ))}
        </select>
        </label>
        <label>
          <h3>Bottom:</h3>
          <select className="picker-menu"
            // value='1'
            onChange={this.updatePant()}
            size={pants.length + 1}
          >
            <option disabled selected value>Pick Pants</option>
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
