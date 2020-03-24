import channelActionTypes from "./channel.types";

const INITIAL_STATE = {
  channels: [],
  currentChannel: null,
  firstLoad: true,
  isFetching: false,
  errorMessage: undefined,
  sortChannels: []
};

const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case channelActionTypes.FETCH_CHANNELS_START:
      return {
        ...state,
        isFetching: true
      };
    case channelActionTypes.FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: action.payload
      };
    case channelActionTypes.FETCH_CHANNELS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case channelActionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload
      };
    case channelActionTypes.SET_FIRST_CHANNEL:
      return {
        ...state,
        firstLoad: false
      };
    case channelActionTypes.SORT_CHANNEL:
      return {
        ...state,
        sortChannels: action.payload
      };
    case channelActionTypes.GET_CHANNELS:
      return {
        ...state,
        channels: action.payload
      };
    default:
      return state;
  }
};

export default channelReducer;
