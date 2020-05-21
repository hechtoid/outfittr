import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import pant from './pant_icon.png'
import shirt from './shirt_icon.png'
import blackpant from '../garments/boxes/black_pant.png'
import whitetop from '../garments/boxes/white_top.png'
import mouse  from './mouse_over_icon.png'
import marshall from './profileuser.jpg'
// import ContactUsModal from './../contact_us/contact_us';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.openUModal = this.openUModal.bind(this);
    this.openCModal = this.openCModal.bind(this);
  }

  // handle logout on modal which is opened through nav bar

  openCModal() {
    this.props.openContactModal();
  }

  openUModal(){
    this.props.openUserModal();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="navbar">
                
            <div className="left-div">
              <Link to={'/new_pants'} id="pants"><img alt="pants" src={blackpant} />
              <br/>
              Add Pants</Link>
              <Link to={'/new_tops'} id="shirts"><img alt="shirt" src={whitetop}/>
              <br />
              Add Tops</Link>
            </div>
            <div className="center-div">
              <div className="tooltip"> 
                <Link to={'/pickr'} id="logo-pickr">
                  Outfit Creator
                {/* <img className="mouse" src={mouse} alt="" /> */}
                </Link>
              </div>
              <div>{/* <p className="pickr-text"></p> */}
                <Link to={'/'} id="logo">Outfittr</Link>
              </div>
              <div>
                <Link to="/outfits" id="nav-link-to-outfits">Saved Outfits</Link>
              </div>
            </div>
                
            <div className="right-div">
              <div className="contact-us-box">
                <div className="contact-us" >
                  <span onClick={this.openCModal}>
                    Contact Info
                  </span>
                </div>
                  <div className="profile-icon" onClick={this.openUModal} ><img alt="" src={marshall}/></div>
              </div>
              {/* prof/user show modal goes here */}
              {/* contact modal goes here */}
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div></div>
            <div className="center-div">
              <Link to={'/'} id="logo">Outfittr</Link>
            </div>
            <div className="right-div">
              {/* only here for testing purposes when not logged in <div className="profile-icon">
              </div> */}
              <div className="contact-us-box">
                <div className="contact-us">
                  <span onClick={this.openCModal}>
                    Contact Info
                  </span>
                </div>
              </div>
              {/* <Contactus logout={this.props.logout}/> */}
            </div>
          </div>
        );
      }
  }

  render() {
      return (
        <div className="bar">
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;