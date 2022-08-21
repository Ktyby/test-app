import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import Form from "../Form";

import { useModal } from "./hooks";

import "./style.css";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const { handleModalShow, handleModalClose } = useModal({
    setDisplayModal,
  });

  return (
    <div className="main">
      <button className="main__button" onClick={handleModalShow}>
        Create person
      </button>
      {displayModal && (
        <Modal onClose={handleModalClose} title="Create user">
          <Form />
        </Modal>
      )}
    </div>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
