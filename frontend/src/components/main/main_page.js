import React from 'react';
import './main.css'

class MainPage extends React.Component {

  render() {
    return (
     <div>

        <div className="splash-ctr-txt">
          <span>
          <p>The Premiere Outfit</p>
          <p>Generator Web App</p>
          <p>That keeps You Looking Sharp</p>

          </span>
        </div>
     <div className="splash-container">
        <br/>
        <div className="splash-left-box">
          <h3> What is Outfittr?</h3>
          <p>Outfittr is a wardrobe app that generates an outfit for you to wear each day.  
            Outfits will be tailored from your clorthes in your wardrobe based on guidelines uyou give it, 
            and other data like weather.
          </p>
          <h3> Try our Demo User Login and generate an outfit today!!!</h3>
        </div>
        <div className="splash-right-box">

        </div>

      </div>
        <footer>
          Copyright &copy; 2019 Outfittr
        </footer>
     </div>
    );
  }
}

export default MainPage;