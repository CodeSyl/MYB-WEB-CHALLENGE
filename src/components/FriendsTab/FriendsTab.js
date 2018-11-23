import React from 'react';
import PropTypes from 'prop-types';
import { ImgCustom, Fetch, Loader } from '../';

import './FriendsTab.scss';

const FriendsTab = ({ id }) => {
  return (
    <Fetch path={`/players/${id}/friends`}>
      {({ isFetching, hasFailed, data }) => {
        if (isFetching) return <Loader />
        if (hasFailed) return <h5>Servor error</h5>
        if (data) {
          return (
            <div className="friends__tab">
              <h3>Friends</h3>
              <div className="events__box">
                {data.map((player, index) => {
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
          )
        }
        return <Loader />
      }}
    </Fetch>
  )
};

FriendsTab.propTypes = {
  id: PropTypes.string
};

export default FriendsTab;