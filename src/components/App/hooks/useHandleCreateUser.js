import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import addNewUser from "../../../store/actions/addNewUser";

const useHandleCreateUser = ({ handleModalClose, dispatch }) =>
  useCallback(
    (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      const data = Object.fromEntries(formData);
      const id = uuidv4();

      handleModalClose();
      dispatch(addNewUser({ ...data, id }));
    },
    [handleModalClose, dispatch]
  );

export default useHandleCreateUser;
