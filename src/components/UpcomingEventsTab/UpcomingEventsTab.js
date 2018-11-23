import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Fetch, Loader } from '../'

import './UpcomingEventsTab.scss';

const UpcomingEventsTab = ({ id = 1 }) => {
  return (
    <Fetch path={`/players/${id}/lastEvents`}>
      {({ isFetching, hasFailed, data }) => {
        if (isFetching) return <Loader />
        if (hasFailed) return <h5>Servor error</h5>
        if (data) {
          return (
            <div className="upcoming__events">
              <h3>Upcoming</h3>
              <div className="events__box">
                {data.map((event, index) => {
                  let hour = moment(event.date).format('H:HH');
                  let dateFormated = moment(event.date).format('dddd D MMMM');
                  let diffMonth = moment(new Date(event.date)).diff(moment(), 'months', true).toFixed();

                  return (
                    <div className="card" key={index}>
                      <p>in {diffMonth} months</p>
                      <h3>{event.name}</h3>
                      <p>{dateFormated}</p>
                      <p>at {hour}</p>
                      <p className="participants">{event.participants.length} participants</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }

        return <Loader />
      }}
    </Fetch>
  );
};

UpcomingEventsTab.propTypes = {
  id: PropTypes.string
};

export default UpcomingEventsTab;