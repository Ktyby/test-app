import { EDIT_USER_DATA } from "../constants";

const editUserData = (data) => ({
  type: EDIT_USER_DATA,
  payload: data,
});

export default editUserData;
