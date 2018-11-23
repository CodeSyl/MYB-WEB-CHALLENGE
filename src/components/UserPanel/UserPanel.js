import React from 'react';
import moment from 'moment';
import { Loader, ImgCustom, Fetch } from '../';

import './UserPanel.scss';

const UserPanel = _ => {
  return (
    <Fetch path="/players/1">
      {({ isFetching, hasFailed, data }) => {
        if (hasFailed) return <h5>Servor error</h5>
        if (isFetching) return <Loader />

        if (data) {
          const lastSeen = moment().diff(moment(new Date(data.last_seen)), 'months', true).toFixed();

          return (
            <div className="user__panel">
              <div className="img__box">
                <ImgCustom img={data.picture} />
              </div>
              <div className="text__box">
                <p className="full__name">{data.first_name} {data.last_name}</p>
                <p className="company">Works at {data.company}</p>
                <i className="italic">Lives in {data.city_name}</i>
                <i>Last seen {lastSeen} months ago</i>
              </div>
              <hr />
              <div className="box__total">
                <div className="total">
                  <p>{data.total_events}</p>
                  <span>events</span>
                </div>
                <div className="total">
                  <p>{data.total_friends}</p>
                  <span>friends</span>
                </div>
              </div>
              <hr />
            </div>
          )
        }

        return <Loader />
      }}
    </Fetch>
  )
};

export default UserPanel;