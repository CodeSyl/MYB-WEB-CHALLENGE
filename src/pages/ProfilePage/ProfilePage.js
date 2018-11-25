// @flow
import * as React from 'react';
import UserPanel from '../../components/UserPanel/UserPanel';
import TabBar from '../../components/TabBar/TabBar';

import './ProfilePage.scss';

type Props = {
  children: React.Node,
}

const ProfilePage = (props: Props) => {
  return (
    <div className="profile__page">
      <UserPanel player={1} />
      <div className="container">
        <TabBar {...props} />
      </div>
    </div>
  );
};

export default ProfilePage;