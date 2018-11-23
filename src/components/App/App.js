import React from 'react';
import { ProfilePage } from '../../pages';
import { UpcomingEventsTab, FriendsTab } from '../';
import { Router } from "@reach/router";

import './App.scss';

const App = _ => {
  return (
    <div className="App">
      <Router>
        <ProfilePage path="/">
          <UpcomingEventsTab path="/players/:1/upcoming" />
          <FriendsTab path="/players/:id/friends" />
        </ProfilePage>
      </Router>
    </div>
  );
};

export default App;
