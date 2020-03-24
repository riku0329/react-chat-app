import channelActionTypes from "./channel.types";

export const fetchChannelsStart = () => ({
  type: channelActionTypes.FETCH_CHANNELS_START
})

export const fetchChannelsSuccess = channelsMap => ({
  type: channelActionTypes.FETCH_CHANNELS_SUCCESS,
  payload: channelsMap
});


export const fetchChannelsFailure = errorMessage => ({
  type: channelActionTypes.FETCH_CHANNELS_FAILURE,
  payload: errorMessage
});


export const getChannels = channelsMap => ({
  type: channelActionTypes.GET_CHANNELS,
  payload: channelsMap
});


export const setCurrentChannel = channel => ({
  type: channelActionTypes.SET_CURRENT_CHANNEL,
  payload: channel
})


export const setFirstChannel = () => ({
  type: channelActionTypes.SET_FIRST_CHANNEL,
})


export const setSortChannel = sort => ({
  type: channelActionTypes.SORT_CHANNEL,
  payload: sort
})
