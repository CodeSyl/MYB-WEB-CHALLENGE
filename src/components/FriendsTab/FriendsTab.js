import React from 'react';
import { ImgCustom } from '../';
import { players } from '../../data/players';

import './FriendsTab.scss';

const FriendsTab = () => {
  return (
    <div className="friends__tab">
      <h3>Friends</h3>
      <div className="events__box">
        {players.map((player, index) => {
          return (
            <div className="card" key={index}>
              <div className="box">
                <ImgCustom img={player.picture}></ImgCustom>
              </div>
              <div className="box">
                <h3>{player.first_name} {player.last_name}</h3>
                <p>{player.total_events} events</p>
                <p>{player.total_friends} friends</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default FriendsTab;