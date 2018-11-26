// @flow
import * as React from 'react';
import moment from 'moment';
import FetchApi from '../../FetchApi';

import './UpcomingEventsTab.scss';

type Props = {
  id: number
};

const UpcomingEventsTab = (props: Props) => {
  const data = FetchApi.read(`/players/${props.id}/lastEvents`);

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
  );
};

export default UpcomingEventsTab;