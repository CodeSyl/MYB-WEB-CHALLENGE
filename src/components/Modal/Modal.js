// @ flow
import * as React from 'react';
import UserPanel from '../UserPanel/UserPanel';
import './Modal.scss';

type Props = {
  display: boolean,
  playerId: number,
  closeModal: void
}

const Modal = (props: Props) => {
  const { display, playerId, closeModal } = props;
  if (display && playerId) {
    return (
      <div className="modal" onClick={e => closeModal(e)}>
        <div className="modal__container">
          <UserPanel playerId={playerId}></UserPanel>
          <button className="btn" onClick={e => closeModal(e)}>Close</button>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;