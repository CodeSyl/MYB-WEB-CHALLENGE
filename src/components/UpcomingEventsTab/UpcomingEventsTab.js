import React from 'react';
import moment from 'moment';
import { lastEvents } from '../../data/lastEvents';
import './UpcomingEventsTab.scss';

const UpcomingEventsTab = () => {
  return (
    <div className="upcoming__events">
      <h3>Upcoming</h3>
      <div className="events__box">
        {lastEvents.map((event, index) => {
          let dateFormated = moment(event.date).format('dddd D MMMM');
          let hour = moment(event.date).format('H:HH');
          return (
            <div className="card" key={index}>
              <p>in x months</p>
              <h3>{event.name}</h3>
              <p>{dateFormated}</p>
              <p>at {hour}</p>
              <p className="participants">{event.participants.length} participants</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default UpcomingEventsTab;