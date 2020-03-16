import channelActionTypes from "./channel.types";

export const getChannels = channelsMap => ({
  type: channelActionTypes.GET_CHANNELS,
  payload: channelsMap
});


export const setCurrentChannel = channel => ({
  type: channelActionTypes.SET_CURRENT_CHANNEL,
  payload: channel
})
