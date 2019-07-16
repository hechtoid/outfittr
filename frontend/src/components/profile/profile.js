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
    componentDidUpdate() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserTops(this.props.currentUser.id);
        this.props.fetchUserPants(this.props.currentUser.id);
    }
    
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
            <div>
              <h2>Your Wardrobe:</h2>
              <div>
                <h3>Tops</h3>
              {this.state.tops.map(top => (
                <GarmentBox key={top._id} name={top.name} color={top.color} type="top" />
                ))}
              </div>
              <div>
                <h3>Pants</h3>
              {this.state.pants.map(pant => (
                <GarmentBox key={pant._id} name={pant.name} color={pant.color} type="pant" />
              ))}
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
