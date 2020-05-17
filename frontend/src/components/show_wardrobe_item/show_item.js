import React from 'react';
import './show_item.css';
import black_pant from '../garments/boxes/black_pant.png'
import blue_pant from '../garments/boxes/blue_pant.png'
import green_pant from '../garments/boxes/green_pant.png'
import orange_pant from '../garments/boxes/orange_pant.png'
import pink_pant from '../garments/boxes/pink_pant.png'
import red_pant from '../garments/boxes/red_pant.png'
import violet_pant from '../garments/boxes/violet_pant.png'
import white_pant from '../garments/boxes/white_pant.png'
import yellow_pant from '../garments/boxes/yellow_pant.png'
import black_top from '../garments/boxes/black_top.png'
import blue_top from '../garments/boxes/blue_top.png'
import green_top from '../garments/boxes/green_top.png'
import orange_top from '../garments/boxes/orange_top.png'
import pink_top from '../garments/boxes/pink_top.png'
import red_top from '../garments/boxes/red_top.png'
import violet_top from '../garments/boxes/violet_top.png'
import white_top from '../garments/boxes/white_top.png'
import yellow_top from '../garments/boxes/yellow_top.png'

class ShowItemBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cssClass: '',
            image: '',
            color: this.props.color,
            imageName: `${this.props.color}_${this.props.type}`
        }
    }

    switcher() {
        switch (this.state.imageName) {
            case 'white_top':
                this.setState({
                    image: `${white_top}`
                })
                break;
            case 'red_top':
                this.setState({
                    image: `${red_top}`
                })
                break;
            case 'orange_top':
                this.setState({
                    image: `${orange_top}`
                })
                break;
            case 'yellow_top':
                this.setState({
                    image: `${yellow_top}`
                })
                break;
            case 'green_top':
                this.setState({
                    image: `${green_top}`
                })
                break;
            case 'blue_top':
                this.setState({
                    image: `${blue_top}`
                })
                break;
            case 'pink_top':
                this.setState({
                    image: `${pink_top}`
                })
                break;
            case 'violet_top':
                this.setState({
                    image: `${violet_top}`
                })
                break;
            case 'black_top':
                this.setState({
                    image: `${black_top}`
                })
                break;
            case 'white_pant':
                this.setState({
                    image: `${white_pant}`
                })
                break;
            case 'red_pant':
                this.setState({
                    image: `${red_pant}`
                })
                break;
            case 'orange_pant':
                this.setState({
                    image: `${orange_pant}`
                })
                break;
            case 'yellow_pant':
                this.setState({
                    image: `${yellow_pant}`
                })
                break;
            case 'green_pant':
                this.setState({
                    image: `${green_pant}`
                })
                break;
            case 'blue_pant':
                this.setState({
                    image: `${blue_pant}`
                })
                break;
            case 'pink_pant':
                this.setState({
                    image: `${pink_pant}`
                })
                break;
            case 'violet_pant':
                this.setState({
                    image: `${violet_pant}`
                })
                break;
            case 'black_pant':
                this.setState({
                    image: `${black_pant}`
                })
                break;
            default:
                this.setState({
                    image: `${white_top}`
                })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.color !== this.state.color) {
            this.setState({
                imageName: `${nextProps.color}_${nextProps.type}`,
                color: `${this.props.color}`
            })
            this.switcher()
        }
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

    check(bool){
        let returnMsg = ""
        if(bool === "formal"){
            returnMsg = this.props.item[bool] ? "Formal" : "Casual"
        } else if (bool === "athleisure"){
            returnMsg = this.props.item[bool] ? "Athleisurewear" : "Not stretchy"
        } else if(bool === "hot"){
            returnMsg = this.props.item[bool] ? "Comfortable in hot weather" : "Uncomfortable in hot weather"
        } else if(bool === "wet"){
            returnMsg = this.props.item[bool] ? "Waterproof" : "Not Waterproof"
        }
        return returnMsg;
    }

    render() {
        return (
            <div className="container">  
                <img className="show-img" src={this.state.image} alt={this.props.color}></img>
                <div className="details">
                    <div className="details-display">
                        <span> {this.check("formal")}</span>
                        <span> {this.check("athleisure")}</span>
                        <span> {this.check("hot")}</span>
                        <span> {this.check("wet")}</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShowItemBox;
