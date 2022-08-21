import { useCallback } from "react";
import deleteUser from "../../../store/actions/deleteUser";

const useHandleDeleteUser = ({ setDisplayConfirmation, id, dispatch }) =>
  useCallback(() => {
    dispatch(deleteUser(id));
    setDisplayConfirmation(false);
  }, [id, dispatch]);

export default useHandleDeleteUser;
