import React from 'react';
import './main.css'
import LoginFormContainer from '../session/login_form_container'

class MainPage extends React.Component {

  render() {
    return (
     <div className="bg">

        <div className="splash-ctr-txt">
          <span>
            The <strong>Premier</strong> Outfit
            <br/>
            Generator Web App
            <br />
            We Keep You Looking <italic>Sharp!!</italic>
            <br />
          </span>
        </div>
     <div className="splash-container">
        <br/>
        <div className="splash-left-box">
          <h3> What is Outfittr?</h3>
            <p>Outfittr is a wardrobe app that generates an outfit for you to wear each day.  
              Outfits will be tailored from your clorthes in your wardrobe based on guidelines you give it, 
              and other data like weather.
            </p>
          <h3> Try our Demo User Login and generate an outfit today!!!</h3>
        </div>
        <div className="splash-right-box">
          <LoginFormContainer/>
        </div>

      </div>
        <footer className='footer'>
          Copyright &copy; 2019 Outfittr
        </footer>
     </div>
    );
  }
}

export default MainPage;