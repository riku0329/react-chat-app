import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true,
  hidden: true
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false
      };
    case userActionTypes.TOGGLE_USER_OPTION:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default userReducer;
