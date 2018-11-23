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
            <UpcomingEventsTab title="Upcoming events"></UpcomingEventsTab>
            <FriendsTab title="Friends"></FriendsTab>
          </TabBar>
        </div>

      </div>
    );
  }
};

export default ProfilePage;