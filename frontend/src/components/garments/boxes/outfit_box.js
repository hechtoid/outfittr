import React from 'react';
import './outfit_box.css';
import black_pant from './black_pant.png'
import blue_pant from './blue_pant.png'
import green_pant from './green_pant.png'
import orange_pant from './orange_pant.png'
import pink_pant from './pink_pant.png'
import red_pant from './red_pant.png'
import violet_pant from './violet_pant.png'
import white_pant from './white_pant.png'
import yellow_pant from './yellow_pant.png'
import black_top from './black_top.png'
import blue_top from './blue_top.png'
import green_top from './green_top.png'
import orange_top from './orange_top.png'
import pink_top from './pink_top.png'
import red_top from './red_top.png'
import violet_top from './violet_top.png'
import white_top from './white_top.png'
import yellow_top from './yellow_top.png'

class OutfitBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pant: {
                image: '',
                color: this.props.pants.color,
                imageName: `${this.props.pants.color}_pant`
            },
            top: {
                image: '',
                color: this.props.top.color,
                imageName: `${this.props.top.color}_top`
            }
        }
    }

    switcher() {
        switch (this.state.top.imageName) {
            case 'white_top':
                this.setState({
                top: {    
                    image: `${white_top}`, 
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'red_top':
                this.setState({
                top: {
                    image: `${red_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'orange_top':
                this.setState({
                top:{
                    image: `${orange_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'yellow_top':
                this.setState({
                top: {    
                    image: `${yellow_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'green_top':
                this.setState({
                top: {
                    image: `${green_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'blue_top':
                this.setState({
                top: {    
                    image: `${blue_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'pink_top':
                this.setState({
                top: {
                    image: `${pink_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'violet_top':
                this.setState({
                top: {
                    image: `${violet_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            case 'black_top':
                this.setState({
                top: {
                    image: `${black_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
                break;
            default:
                this.setState({
                top: {
                    image: `${white_top}`,
                    color: this.props.top.color,
                    imageName: `${this.props.top.color}_top`
                }
                })
            }
        switch(this.state.pant.imageName){    
            case 'white_pant':
                this.setState({
                    pant: {
                        image: `${white_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'red_pant':
                this.setState({
                    pant: {
                        image: `${red_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'orange_pant':
                this.setState({
                    pant: {
                        image: `${orange_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'yellow_pant':
                this.setState({
                    pant: {
                        image: `${yellow_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'green_pant':
                this.setState({
                    pant: {
                        image: `${green_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'blue_pant':
                this.setState({
                    pant: {
                        image: `${blue_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'pink_pant':
                this.setState({
                    pant: {
                        image: `${pink_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'violet_pant':
                this.setState({
                    pant: {
                        image: `${violet_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            case 'black_pant':
                this.setState({
                    pant: {
                        image: `${black_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
                break;
            default:
                this.setState({
                    pant: {
                        image: `${white_pant}`,
                        color: this.props.pants.color,
                        imageName: `${this.props.pants.color}_pant`
                    }
                })
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            pant: {
                image: '',
                color: nextProps.pants.color,
                imageName: `${nextProps.pants.color}_pant`
            },
            top: {
                image: '',
                color: nextProps.top.color,
                imageName: `${nextProps.top.color}_top`
            }
        })
        this.switcher()
    }

    componentDidUpdate() {
        if (this.props.color !== this.state.color) {
            this.setState({ imageName: `${this.props.color}_${this.props.type}`, color: `${this.props.color}` })
            this.switcher()
        }
    }

    componentDidMount() {
        this.switcher()
    }

    render() {
        return (
            <div className="outfit-image-box">
                <div className="wardrobe-item-text"> {this.props.name}</div>
                <div><img className="outfit-garment-img" src={this.state.top.image} alt={this.state.top.color}></img></div>
                <div><img className="outfit-garment-img" src={this.state.pant.image} alt={this.state.pant.color}></img></div>
            </div>
        );
    }
}
export default OutfitBox;
