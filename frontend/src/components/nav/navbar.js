import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Contactus from './../contact_us/contact_us';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  // handle logout on modal which is opened through nav bar

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }



  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <div></div>
                <div className="center-div">
                  <Link to={'/'} id="logo">Outfittr</Link>
                </div>
                <div className="right-div">
                  <div className="profile-icon" >
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