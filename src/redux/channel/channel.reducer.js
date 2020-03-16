import channelActionTypes from "./channel.types";

const INITIAL_STATE = {
  channels: [],
  currentChannel: null
};

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case channelActionTypes.GET_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    case channelActionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload
      }
    default:
      return state;
  }
};

export default channelReducer;
