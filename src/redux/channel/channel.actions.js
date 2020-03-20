import channelActionTypes from "./channel.types";

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
