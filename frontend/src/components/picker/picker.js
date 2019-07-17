import React from 'react';
import ShowBox from './show_box';

class AddTop extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          // name: "",
          // color: "white",
          // hot: true,
          // formal: false,
          // wet: false,
          // athleisure: false  ,
          top: {},
          pant: {}
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

  render() {
    // const topChoices = {for (let index = 0; index < this.props.tops.length; index++) {
    //   return(`<option value="${index}">${this.props.tops[index].name}</option>`)
    // }}
    // // {topChoices}
    let tops=this.props.tops
    return (
      <div className="picker-page">
        <select className="picker-menu" 
        value={this.state.top}
        onChange={this.updateTop()}
        >
          {tops.map((top,index) => (

            // <div className="garment-item">
            //   <GarmentBox
            //     key={top._id}
            //     name={top.name}
            //     color={top.color}
            //     type="top"
            //   />
            // </div>
          <option value={index}>{top.name}</option>
          ))}
        </select>

        name={this.state.top.name}
        color={this.state.top.color}
        <div className="garment-container">
          <div className="demo-item">
            <ShowBox
              name={this.state.top.name}
              color={this.state.top.color}
              type="top"
            />
            
          </div>
          <br/>
          {/* {this.props.tops.map(top => (
            <div className="garment-item">
              <GarmentBox
                key={top._id}
                name={top.name}
                color={top.color}
                type="top"
              />
            </div>
          ))} */}
        </div>
      </div>
    )
  }
}

export default AddTop;
