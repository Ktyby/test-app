import { useCallback } from "react";

const useHandleDeleteUser = ({ setDisplayConfirmation }) =>
  useCallback(() => {
    setDisplayConfirmation(false);
  }, []);

export default useHandleDeleteUser;
