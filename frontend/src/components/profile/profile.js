import React from 'react';
import GarmentBox from '../garments/garment_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tops: [],
            pants: [],
            outfits: []
        }
      document.title = 'outfittr wardrobe'

    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserTops(this.props.currentUser.id);
        this.props.fetchUserPants(this.props.currentUser.id);
      this.props.fetchUserOutfits(this.props.currentUser.id);
    }
    
    componentWillReceiveProps(newState) {
        this.setState({ 
          tops: newState.tops,
          pants: newState.pants,
          outfits: newState.outfits
         });
    }   
    
    render() {
  
      if (this.state.tops.length === 0 && this.state.pants.length === 0) {
          return (<div>This user has no Clothes!</div>)
        } else {
          return (
            <div className="profile-page">
              <br/>
              <h2 className="wardrobe">Your Wardrobe</h2>
              <div className="flex-profile-page">
                <div className="tops">
                  <h3 className="tops-n-bottoms">Tops</h3>
                    <div className="garment-box-page">
                  {this.state.tops.map(top => (
                    <div className="garment-display-item">
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
                  <div className="garment-display-item">
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
