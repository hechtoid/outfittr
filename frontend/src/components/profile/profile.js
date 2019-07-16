import React from 'react';
import GarmentBox from '../garments/garment_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            tops: [],
            pants: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserTweets(this.props.currentUser.id);
        this.props.fetchUserTops(this.props.currentUser.id);
        this.props.fetchUserPants(this.props.currentUser.id);
    }
    // shouldComponentUpdate() {
    //     console.log(this.props.currentUser.id)
    //     this.props.fetchUserTops(this.props.currentUser.id);
    //     this.props.fetchUserPants(this.props.currentUser.id);
    // }
    
    componentWillReceiveProps(newState) {
        this.setState({ 
          tweets: newState.tweets,
          tops: newState.tops,
          pants: newState.pants
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
              <div>
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
              {/* {this.state.tweets.map(tweet => (
                <TweetBox key={tweet._id} text={tweet.text} />
              ))} */}
            </div>
          );
        }
      }
}

export default Profile;
