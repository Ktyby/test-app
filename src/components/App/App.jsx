import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal";
import Form from "../Form";
import UserField from "../UserField";

import { useModal, useHandleCreateUser } from "./hooks";

import "./style.css";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const dispatch = useDispatch();
  const usersFromStore = useSelector((state) => state.users);

  const { handleModalShow, handleModalClose } = useModal({
    setDisplayModal,
  });

  const handleCreateUser = useHandleCreateUser({
    handleModalClose,
    dispatch,
  });

  return (
    <div className="main">
      <button className="main__button" onClick={handleModalShow}>
        Create person
      </button>
      <div className="main__paginate-container">
        <table>
          {usersFromStore.users.map((user) => (
            <UserField key={user.id} user={user} />
          ))}
        </table>
      </div>
      {displayModal && (
        <Modal onClose={handleModalClose} title="Create user">
          <Form onSubmit={handleCreateUser} />
        </Modal>
      )}
    </div>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
