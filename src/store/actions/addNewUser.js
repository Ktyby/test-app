import { ADD_NEW_USER } from "../constants";

const addNewUser = (data) => ({
  type: ADD_NEW_USER,
  payload: data,
});

export default addNewUser;
