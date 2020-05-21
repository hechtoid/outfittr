import React from 'react';
import { Link } from 'react-router-dom';
import OutfitBox from '../garments/boxes/outfit_box';
import './outfits.css';

class Outfits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            outfits: []
        }
        document.title = 'outfits @ outfittr'
    }

    componentWillMount() {
        this.props.fetchUserOutfits(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({
            outfits: newState.outfits
        });
    }

    itemModalHandler(item, type) {
        this.props.openItemModal(item, type)
    }

    render() {

        if (this.state.outfits.length === 0) {
            return (<div>This user has no Clothes!</div>) // let's put a loading screen/placeholder
        } else {
            return (
                <div className="outfits-page">
                    <h2 className="wardrobe">Your Outfits</h2>
                    <div className="flexer">
                                {this.state.outfits.map(outfit => (
                                    // onClick={this.itemModalHandler.bind(this, outfit, "outift")} add this in div below once modal is fixed, nick signing off for now
                                    <div key={outfit._id} className="outfit-garment-display-item" > 
                                         <Link 
                                            to={{
                                                pathname: `/outfit`,
                                                state: {
                                                    outfit
                                                }
                                            }}>
                                            <OutfitBox
                                                key={outfit._id}
                                                name={outfit.name}
                                                pants={outfit.pant}
                                                top = {outfit.top}
                                                type="outfit"
                                            />
                                        </Link>
                                    </div>
                                ))}
                    </div>
                </div>
            );
        }
    }
}

export default Outfits;
