import { ADD_NEW_USER, EDIT_USER_DATA, DELETE_USER } from "../constants";
import initialState from "../initialState";

const users = (state = initialState, action) => {
  let userIndex;
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      userIndex = state.users.findIndex((user) => user.id === action.payload);
      state.users.splice(userIndex, 1);

      return {
        ...state,
      };
    case EDIT_USER_DATA:
      userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      state.users.splice(userIndex, 1, action.payload);

      return { ...state };
    default:
      return state;
  }
};

export default users;
