import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import blackpant from '../garments/boxes/black_pant.png'
import whitetop from '../garments/boxes/white_top.png'
import profilepic from './profileuser.jpg'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.openUModal = this.openUModal.bind(this);
    this.openCModal = this.openCModal.bind(this);
  }

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
                </Link>
              </div>
              <div>
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
                  <div className="profile-icon" onClick={this.openUModal} ><img alt="" src={profilepic}/></div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="logged-out">
            <div className="left-div">
            </div>
            <div className="center-div">
              <Link to={'/'} id="logo">Outfittr</Link>
            </div>
            <div className="right-div">
              <div className="contact-us-box">
                <div className="contact-us">
                  <span onClick={this.openCModal}>
                    Contact Info
                  </span>
                </div>
              </div>
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