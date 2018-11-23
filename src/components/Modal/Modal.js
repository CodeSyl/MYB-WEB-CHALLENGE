import React from 'react';
import PropTypes from 'prop-types';
import { UserPanel } from '../';
import './Modal.scss';

const Modal = ({ display, playerId, closeModal }) => {

  if (display && playerId) {
    return (
      <div className="modal" onClick={e => closeModal(e)}>
        <div className="modal__container">
          <UserPanel player={playerId}></UserPanel>
          <button className="btn" onClick={e => closeModal(e)}>Close</button>
        </div>
      </div>
    );
  }
  return null;
};

Modal.propTypes = {
  display: PropTypes.bool.isRequired,
  playerId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Modal;