// @flow
import * as  React from 'react';
import { Link } from "@reach/router";

import './TabBar.scss';

type Props = {
  children: React.ChildrenArray<React.Element<any>>
};

const TabBar = (props: Props) => {
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
      {props.children}
    </div>
  );
};

export default TabBar;  