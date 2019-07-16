import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import pant from './pant_icon.png'
import shirt from './shirt_icon.png'
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
            <div>
                
                <div className="left-div">
              <Link to={'/new_pants'} id="Pants"><img alt="pants" src={pant} />
              <br/>
              Add Pants</Link>
                <Link to={'/new_tops'} id="Shirts"><img alt="shirt" src={shirt}/>
                <br />
                Add Tops</Link>
                </div>
                <div className="center-div">
                  <Link to={'/'} id="logo">Outfittr</Link>
                </div>
                <div className="right-div">
                  <div className="contact-us-box">
                    <div className="contact-us" >
                      <span onClick={this.openCModal}>
                        Contact Us!
                      </span>
                    </div>
                  </div>
                  <div className="profile-icon" onClick={this.openUModal} >
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
                <div className="contact-us" onClick={this.openCModal}>
                  Contact Us!
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