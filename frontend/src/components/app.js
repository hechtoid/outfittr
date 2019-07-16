import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import TweetsContainer from './tweets/tweets_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';
import AddTopContainer from './garments/add_top_container';
import AddPantContainer from './garments/add_pant_container';

const App = () => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Timmana&display=swap" rel="stylesheet"></link>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
      <ProtectedRoute exact path="/new_tops" component={AddTopContainer} />
      <ProtectedRoute exact path="/new_pants" component={AddPantContainer} />
    </Switch>
  </div>
);

export default App;