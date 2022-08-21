import { DELETE_USER } from "../constants";

const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export default deleteUser;
