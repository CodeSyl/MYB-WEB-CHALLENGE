import React from 'react';
import { ProfilePage } from '../../pages';
import { UpcomingEventsTab, FriendsTab } from '../';
import { Router, Redirect } from "@reach/router";

import './App.scss';

const App = _ => {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="players/1/upcoming" noThrow />
        <ProfilePage path="/">
          <UpcomingEventsTab path="/players/:1/upcoming" />
          <FriendsTab path="/players/:id/friends" />
        </ProfilePage>
      </Router>
    </div>
  );
};

export default App;
