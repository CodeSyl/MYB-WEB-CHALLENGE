import React from 'react';
import {
  FriendsTab,
  TabBar,
  UpcomingEventsTab,
  UserPanel,
} from '../../components';

import './ProfilePage.scss';

class ProfilePage extends React.Component {

  render() {
    return (
      <div className="profile__page">
        <UserPanel />
        <div className="container">
          <TabBar>
            <div title="Upcoming events" active="true"></div>
            <div title="Friends" active="true"></div>
          </TabBar>

          <FriendsTab></FriendsTab>
        </div>

      </div>
    );
  }
};

export default ProfilePage;