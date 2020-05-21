import React from 'react';
import GarmentBox from '../garments/boxes/garment_box';
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tops: [],
            pants: []
        }
      document.title = 'wardrobe @ outfittr'
    }
    
    componentWillMount() {
      this.props.fetchUserTops(this.props.currentUser.id);
      this.props.fetchUserPants(this.props.currentUser.id);
  
    }
    
    componentWillReceiveProps(newState) {
        this.setState({ 
          tops: newState.tops,
          pants: newState.pants
         });
    }   
    
    itemModalHandler(item, type) {
      this.props.openItemModal(item, type)
    }

    render() {
  
      if (this.state.tops.length === 0 && this.state.pants.length === 0) {
          return (<div>This user has no Clothes!</div>) // let's put a loading screen/placeholder
        } else {
          return (
            <div className="profile-page">
              <h2 className="wardrobe">Your Wardrobe</h2>
              <div className="flex-profile-page">
                <div className="tops">
                  <h3 className="tops-n-bottoms">Tops</h3>
                    <div className="garment-box-page">
                      {this.state.tops.map(top => (
                        <div className="garment-display-item" onClick={this.itemModalHandler.bind(this, top, "top")} key={top._id} >
                          <GarmentBox 
                          key={top._id} 
                          name={top.name} 
                          color={top.color} 
                          type="top"
                          />
                        </div>
                      ))}
                    </div>
                </div>
              <div >
            </div>
                <div className="pants">
                  <h3 className="tops-n-bottoms">Pants</h3>
                  <div className="garment-box-page">
                      {this.state.pants.map(pant => (
                        <div className="garment-display-item" onClick={this.itemModalHandler.bind(this, pant, "pant")} key={pant._id} >
                            <GarmentBox 
                            key={pant._id} 
                            name={pant.name} 
                            color={pant.color} 
                            type="pant" 
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
}

export default Profile;
