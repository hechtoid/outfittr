import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  // handle logout on modal which is opened through nav bar

  // logoutUser(e) {
  //     e.preventDefault();
  //     this.props.logout();
  // }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <div>

                </div>
                <div className="center-div">
                  <Link to={'/'} id="logo">Outfittr</Link>
                </div>
                <div className="right-div">
                  test content
                  {/* prof/user show modal goes here */}
                  {/* contact modal goes here */}
                </div>
            </div>
        );
      } else {
        return (
          <div>
            <div>
              
            </div>
            <div className="center-div">
              <Link to={'/'} id="logo">Outfittr</Link>
            </div>
              <div className="right-div">
                test content
                {/* contact modal goes here */}
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