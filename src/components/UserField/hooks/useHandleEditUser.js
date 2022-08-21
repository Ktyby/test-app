import { useCallback } from "react";

const useHandleEditUser = ({ handleModalClose }) =>
  useCallback(() => {
    handleModalClose();
  }, [handleModalClose]);

export default useHandleEditUser;
