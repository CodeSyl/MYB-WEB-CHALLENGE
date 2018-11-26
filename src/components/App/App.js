// @flow
import * as React from 'react';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import FriendsTab from '../FriendsTab/FriendsTab';
import UpcomingEventsTab from '../UpcomingEventsTab/UpcomingEventsTab';
import { Router, Redirect } from "@reach/router";

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="players/1/upcoming" noThrow />
        <ProfilePage path="/">
          <UpcomingEventsTab path="/players/:id/upcoming" />
          <FriendsTab path="/players/:id/friends" />
        </ProfilePage>
      </Router>
    </div>
  );
};

export default App;
