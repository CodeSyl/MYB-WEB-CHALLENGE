import React from 'react';
import PropTypes from 'prop-types';
import { TabBar, UserPanel, } from '../../components';

import './ProfilePage.scss';

const ProfilePage = props => {
  return (
    <div className="profile__page">
      <UserPanel />
      <div className="container">
        <TabBar {...props} />
      </div>

    </div>
  );
};

ProfilePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default ProfilePage;