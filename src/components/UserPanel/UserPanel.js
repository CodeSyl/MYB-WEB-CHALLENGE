import React from 'react';
import moment from 'moment';
import { ImgCustom } from '../';
import { players } from '../../data/players';
import './UserPanel.scss';

const PICTURE = 'https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg';

const UserPanel = () => {
  const user = players[1];
  const lastSeen = moment(new Date(user.last_seen)).diff(moment(), 'months', true).toFixed();

  return (
    <div className="user__panel">
      <div className="img__box">
        <ImgCustom img={PICTURE} />
      </div>
      <div className="text__box">
        <p className="full__name">{user.first_name} {user.last_name}</p>
        <p className="company">Works at {user.company}</p>
        <i className="italic">Lives in {user.city_name}</i>
        <i>Last seen {lastSeen} months ago</i>
      </div>
      <hr />
      <div className="box__total">
        <div className="total">
          <p>{user.total_events}</p>
          <span>events</span>
        </div>
        <div className="total">
          <p>{user.total_friends}</p>
          <span>friends</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default UserPanel;