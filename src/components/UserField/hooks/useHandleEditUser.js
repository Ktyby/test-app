import { useCallback } from "react";

import editUserData from "../../../store/actions/editUserData";

const useHandleEditUser = ({ handleModalClose, dispatch, id }) =>
  useCallback(
    (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      const data = Object.fromEntries(formData);

      handleModalClose();
      dispatch(editUserData({ ...data, id }));
    },
    [handleModalClose, dispatch, id]
  );

export default useHandleEditUser;
