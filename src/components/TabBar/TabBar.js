import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router";

import './TabBar.scss';

const TabBar = ({ children }) => {
  return (
    <div>
      <div className="tab__bar">

        <div className="link">
          <Link
            to="/players/1/upcoming"
            name="upcoming"
            getProps={({ isCurrent }) => isCurrent ? { className: "active" } : null}>
            Upcoming Events</Link>
        </div>

        <div className="link">
          <Link
            to="/players/1/friends"
            name="friends"
            getProps={({ isCurrent }) => isCurrent ? { className: "active" } : null}>
            Friends</Link>
        </div>

      </div>
      {children}
    </div>
  );
};

TabBar.propTypes = {
  children: PropTypes.element.isRequired
};

export default TabBar;  