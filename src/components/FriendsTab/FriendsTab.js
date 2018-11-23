import React from 'react';
import PropTypes from 'prop-types';
import { Fetch, ImgCustom, Loader, Modal } from '../';

import './FriendsTab.scss';

class FriendsTab extends React.Component {
  state = {
    modal: {
      display: false,
      playerId: 0
    }
  };

  openModal = id => {
    this.setState(state => ({ ...state, modal: { ...state.modal, playerId: id, display: true } }))
  }

  closeModal = e => {
    e.stopPropagation();
    const { target } = e;
    if (target.className === "modal" || target.className === "btn") {
      this.setState(state => ({ ...state, modal: { ...state.modal, display: false, playerId: 0 } }))
    }
  }

  render() {
    const { id } = this.props;
    const { modal: { display, playerId } } = this.state;
    return (
      <Fetch path={`/players/${id}/friends`}>
        {({ isFetching, hasFailed, data }) => {
          if (isFetching) return <Loader />
          if (hasFailed) return <h5>Servor error</h5>
          if (data) {
            return (
              <div className="friends__tab">

                <Modal
                  display={display}
                  playerId={playerId}
                  closeModal={this.closeModal}
                />

                <h3>Friends</h3>
                <div className="events__box">
                  {data.map((player, index) => {
                    return (
                      <div
                        className="card"
                        key={index}
                        onClick={_ => this.openModal(player.id)}
                      >
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
  }
}

FriendsTab.propTypes = {
  id: PropTypes.string
};

export default FriendsTab;