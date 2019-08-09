import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';
import UserModal from './user/user';
import ShowItemModal from "./show_wardrobe_item/item_modal";
import ContactUsModal from './contact_us/contact_us';
import AddTopContainer from './garments/add_top_container';
import AddPantContainer from './garments/add_pant_container';
import PickerContainer from './picker/picker_container'
import './app.css';
import OutfitContainer from './outfits/outfit_container';

const App = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Timmana&display=swap" rel="stylesheet"></link>
    <NavBarContainer />
    <UserModal/>
    <ContactUsModal/>
    <ShowItemModal/>
    <main className="main" >
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/wardrobe" component={ProfileContainer} />
        <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
        <ProtectedRoute exact path="/new_tops" component={AddTopContainer} />
        <ProtectedRoute exact path="/new_pants" component={AddPantContainer} />
        <ProtectedRoute exact path="/pickr" component={PickerContainer} />
        <ProtectedRoute exact path="/outfits" component={OutfitContainer} />
        <ProtectedRoute component={ProfileContainer} />

      </Switch>
    </main>
  </div>
);

export default App;