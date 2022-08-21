import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";

import "./style.css";

const ConfirmationModal = ({ onDeleteUser, onClose, title }) => (
  <Modal className="confirmation-modal" title={title} onClose={onClose}>
    <div className="confirmation-modal__content">
      <p className="confirmation-modal__text">Are You sure?</p>
    </div>
    <div className="confirmation-modal__buttons">
      <button className="confirmation-modal__button" onClick={onDeleteUser}>
        Yep
      </button>
      <button className="confirmation-modal__button" onClick={onClose}>
        Nope
      </button>
    </div>
  </Modal>
);

ConfirmationModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onDeleteUser: PropTypes.func,
};

ConfirmationModal.defaultProps = {
  title: "Confirmation",
  onClose: () => {},
  onDeleteUser: () => {},
};

export default ConfirmationModal;
