import messageActionTypes from "./message.types";

const INITIAL_STATE = {
  messages: [],
  joinUsers: "",
  searchResults: [],
  searchTherm: ''
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case messageActionTypes.GET_MESSAGE:
      return {
        ...state,
        messages: action.payload
      };
    case messageActionTypes.JOIN_USERS:
      return {
        ...state,
        joinUsers: action.payload
      };
    case messageActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    case messageActionTypes.SET_SEARCH_THERM:
      return {
        ...state,
        searchTherm: action.payload
      };
    default:
      return state;
  }
};

export default messageReducer;
