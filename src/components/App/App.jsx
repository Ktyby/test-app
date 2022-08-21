import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Modal from "../Modal";
import Form from "../Form";
import UserField from "../UserField";

import { useModal, useHandleCreateUser } from "./hooks";

import "./style.css";

const App = ({ itemsPerPage }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
  const usersFromStore = useSelector((state) => state.users);

  const { handleModalShow, handleModalClose } = useModal({
    setDisplayModal,
  });

  const handleCreateUser = useHandleCreateUser({
    handleModalClose,
    dispatch,
  });

  useEffect(() => {
    const users = usersFromStore.users || [];
    const endOffset = itemOffset + itemsPerPage;
    setUsers(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, usersFromStore.users]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % usersFromStore.users.length;

    setItemOffset(newOffset);
  };

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
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="prev"
          renderOnZeroPageCount={null}
          className="main__paginate"
        />
      </div>
      {displayModal && (
        <Modal onClose={handleModalClose} title="Create user">
          <Form onSubmit={handleCreateUser} />
        </Modal>
      )}
    </div>
  );
};

App.propTypes = {
  itemsPerPage: PropTypes.number,
};
App.defaultProps = {
  itemsPerPage: 2,
};

export default App;
