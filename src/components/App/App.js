// @flow
import * as React from 'react';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import Loader from '../Loader/Loader';
import { Router, Redirect } from "@reach/router";

import './App.scss';

const FriendsTab = React.lazy(() => import('../FriendsTab/FriendsTab'));
const UpcomingEventsTab = React.lazy(() => import('../UpcomingEventsTab/UpcomingEventsTab'));

const App = () => {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <Router>
          <Redirect from="/" to="players/1/upcoming" noThrow />
          <ProfilePage path="/">
            <UpcomingEventsTab path="/players/:id/upcoming" />
            <FriendsTab path="/players/:id/friends" />
          </ProfilePage>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default App;
