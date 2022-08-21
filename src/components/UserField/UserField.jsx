import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import "./style.css";

import ConfirmationModal from "../ConfirmationModal";
import Modal from "../Modal";
import Form from "../Form";

import { useHandleDeleteUser, useModal, useHandleEditUser } from "./hooks";

const UserField = ({ user }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  const dispatch = useDispatch();

  const { handleModalShow, handleModalClose } = useModal({
    setDisplayModal,
  });

  const handleDeleteUser = useHandleDeleteUser({
    setDisplayConfirmation,
    dispatch,
    id: user.id,
  });

  const handleEditUser = useHandleEditUser({
    handleModalClose,
  });

  return (
    <tr>
      <td className="user-cell">{user.surname}</td>
      <td className="user-cell">{user.name}</td>
      <td className="user-cell">{user.birthday}</td>
      <td className="user-cell">{user.email}</td>
      <td className="user-cell">
        <button className="user-cell__button" onClick={handleModalShow}>
          Edit
        </button>
      </td>
      <td className="user-cell">
        <button
          className="user-cell__button"
          onClick={() => setDisplayConfirmation(true)}
        >
          Delete
        </button>
      </td>
      {displayConfirmation && (
        <ConfirmationModal
          onDeleteUser={handleDeleteUser}
          onClose={() => {
            setDisplayConfirmation(false);
          }}
        />
      )}
      {displayModal && (
        <Modal onClose={handleModalClose} title="Edit user">
          <Form userData={user} onSubmit={handleEditUser} />
        </Modal>
      )}
    </tr>
  );
};

UserField.propTypes = {
  user: PropTypes.object,
};
UserField.defaultProps = {
  user: {},
};

export default UserField;
