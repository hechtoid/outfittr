import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import ContactusContainer from './../contact_us/contact_us_container';
import UserContainer from './../user/user_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.openUModal.bind(this);
  }

  // handle logout on modal which is opened through nav bar

  openUModal(){
    this.props.openUserModal();
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
                  <div className="profile-icon" onClick={this.openUModal()} >
                  </div>
                    <UserContainer/>
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