import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import Form from "../Form";
import UserField from "../UserField";

import { useModal } from "./hooks";

import "./style.css";

const users = [
  {
    name: "Max",
    surname: "Verstappen",
    email: "max@gmail.com",
    birthday: "09-30-1997",
    id: 1,
  },
];

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
      <div className="main__paginate-container">
        <table>
          {users.map((user) => (
            <UserField key={user.id} user={user} />
          ))}
        </table>
      </div>
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
