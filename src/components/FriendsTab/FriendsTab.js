// @flow
import * as React from 'react';
import Fetch from '../Fetch/Fetch';
import ImgCustom from '../ImgCustom/ImgCustom';
import Loader from '../Loader/Loader';

import './FriendsTab.scss';

const Modal = React.lazy(() => import('../Modal/Modal'));

type ModalType = {
  display: boolean,
  playerId: number
};

type Props = {
  id: string
};

type State = {
  modal: ModalType
};

class FriendsTab extends React.Component<Props, State> {
  state = {
    modal: {
      display: false,
      playerId: 0
    }
  };

  openModal = (id: number) => {
    this.setState(state => ({ ...state, modal: { ...state.modal, playerId: id, display: true } }))
  }

  closeModal = (e: SyntheticEvent<>) => {
    e.stopPropagation();
    if (e.target.className === "modal" || e.target.className === "btn") {
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
                <React.Suspense fallback={<Loader />}>
                  <Modal
                    display={display}
                    playerId={playerId}
                    closeModal={this.closeModal}
                  />
                </React.Suspense>

                <h3>Friends</h3>
                <div className="events__box">
                  {data.map((player, index) => {
                    return (
                      <div
                        className="card"
                        key={index}
                        onClick={() => this.openModal(player.id)}>
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

export default FriendsTab;