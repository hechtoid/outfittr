import React from 'react';
import GarmentBox from '../garments/boxes/garment_box';

// import './outfit.css';

class Outfit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pant: this.props.location.state ? this.props.location.state.outfit.pant : {},
            top: this.props.location.state ? this.props.location.state.outfit.top : {},
            name: this.props.location.state ? this.props.location.state.outfit.name : '',
        }
        document.title = `${this.state.name} outfit @ outfittr`
    }
    itemModalHandler(item, type) {
        this.props.openItemModal(item, type)
    }

    render() {
        if (!this.state.pant.name)  return <div className="outfit-container">no outfit selected</div>
        else return ( 
            <div className="outfit-container">
            
            <div className="outfit">
                <div className="garment-display-item" onClick={this.itemModalHandler.bind(this, this.state.top, "top")}>
                            <GarmentBox 
                            key={this.state.top._id} 
                            name={this.state.top.name} 
                            color={this.state.top.color} 
                            type="top"
                            />
                </div>
                <div className="outfit-attributes"> 
                    <div className="outfit-title">
                        {this.state.name} 
                    </div>                    
                    <p>{this.state.top.formal && this.state.pant.formal ? "Formal" : "Casual"}</p>
                    <p>{this.state.top.athleisure && this.state.pant.athleisure ? "Athleisurewear" : "Not stretchy"}</p>
                    <p>{this.state.top.hot && this.state.pant.hot ? "Comfortable in hot weather" : "Uncomfortable in hot weather"}</p>
                    <p>{this.state.top.wet && this.state.pant.wet ? "Waterproof" : "Not waterproof"}</p>
                    <div className="outfit-info">
                        added { (new Date(this.props.location.state.outfit.date)).toLocaleDateString()}
                    </div>
                  </div>
                <div className="garment-display-item" onClick={this.itemModalHandler.bind(this, this.state.pant, "pant")}>
                            <GarmentBox 
                            key={this.state.pant._id} 
                            name={this.state.pant.name} 
                            color={this.state.pant.color} 
                            type="pant" 
                          />
                </div>
             


            </div>
            </div>

        )
    }
}

export default Outfit;
