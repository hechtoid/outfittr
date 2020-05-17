import React from 'react';
import ShowBox from './show_box';
import { Link } from 'react-router-dom';
import './picker.css'

class Picker extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
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
    this.props.fetchUserOutfits(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let outfit = {
      name: this.state.name,
      top: this.state.top,
      pant: this.state.pant
      }
      this.props.composeOutfit(outfit);
      
      this.setState({
        name: "",
        hot: false,
        formal: false,
        wet: false,
        athleisure: false,
        top: { name: 'shirt', color: 'white' },
        pant: { name: 'bottom', color: 'white' }
      })
  }
  updateTop() {
    return e => this.setState({
      top: this.props.tops[e.target.value]
    });
  }

  updatePant() {
    return e => this.setState({
      pant: this.props.pants[e.target.value]
    })
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
  updateName() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }
  
  f() {
  document.getElementsByClassName('dropdown')[0].classList.toggle('down');
  document.getElementsByClassName('arrow')[0].classList.toggle('gone');
  if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
    setTimeout(function () {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
  }
}

  render()  {
    let tops = this.props.tops.map((el, index) => {
      let top = Object.assign({}, el)
      top.index = index
      return top
  })
    let pants = this.props.pants.map((el, index) => {
      let pant = Object.assign({}, el)
      pant.index = index
      return pant
  })
      
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
        <div className="picker-page-overlay"></div>
        <div className="picker-radios">
          {/* <div className="link-to-outfits">
            <Link to="/outfits" id="link-to-outfits">Outfits</Link>
          </div> */}
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
              Hot?
                <input type="checkbox"
                className="picker-checkbox"
                onChange={this.updateHot()}
                checked={this.state.hot}
              />
            </label>
            <label>
              Rain?
                  <input type="checkbox"
                className="picker-checkbox"
                onChange={this.updateWet()}
                checked={this.state.wet}
              />
            </label>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text"
              className="outfit-input"
                value={this.state.name}
                onChange={this.updateName()}
                placeholder="outfit name"
                required
              />
              <br/>
                <input className="outfit-save-btn" type="submit" value="Save Outfit" />
            </div>
          </form>
         </div>
        </div>
         
      <div className="outfit-generator-container">
          <div className="outfit-selector-top-bot">

                
                <label>
                  <h3>Top:</h3>
                  </label>
                  <select className="picker-menu" 
                  // value={this.state.top.name}
                  onChange={this.updateTop()}
                  size={tops.length+1}>
        
                  <option className="pickr-title" disabled selected value>Select Shirts </option>
                    {tops.map((top) => (
                      <option value={top.index}>{top.name}</option>
                      ))}
                  </select>
                              
                  <label>
                    <h3>Bottom:</h3>
                    </label>
                    <select className="picker-menu"
                      // value='1'
                      onChange={this.updatePant()}
                      size={pants.length + 1} >
                      <option className="pickr-title" disabled selected value>Pick Pants</option>
                      {pants.map((pant) => (
                        <option value={pant.index}>{pant.name}</option>
                      ))}
                    </select>
                    </div>

          <div className='outfit-selector-outfits'>
                  <span className="top-item">
                    <ShowBox
                      name={this.state.top.name}
                      color={this.state.top.color}
                      formal={this.state.top.formal}
                      type="top"
                    />
                  </span>
                  <span className="bottom-item">
                    <ShowBox
                      name={this.state.pant.name}
                      color={this.state.pant.color}
                      type="pant"
                    />
                  </span>
          </div>
          <div className='outfit-selector-attributes'>
                  <div className="top-attributes"> 
                    <p>Hot: {this.state.top.hot ? this.state.top.hot +'' : 'false'}</p>
                    <p>Formal: {this.state.top.formal ? this.state.top.hot + '' : 'false'}</p>
                    <p>Athleisure: {this.state.top.athleisure ? this.state.top.hot + '' : 'false'}</p>
                    <p>Rain: {this.state.top.wet ? this.state.top.hot + '' : 'false'}</p>
                  </div>
                  <div className="pant-attributes">
                    <p>Hot: {this.state.pant.hot ? this.state.pant.hot + '' : 'false'}</p>
                    <p>Formal: {this.state.pant.formal ? this.state.pant.hot + '' : 'false'}</p>
                    <p>Athleisure: {this.state.pant.athleisure ? this.state.pant.hot + '' : 'false'}</p>
                    <p>Rain: {this.state.pant.wet ? this.state.pant.hot + '' : 'false'}</p>
                  </div>
          </div>
            
          </div>
          
        </div>
       
    )
  }
}

export default Picker;
