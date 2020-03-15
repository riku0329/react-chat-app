import channelActionTypes from "./channel.types";


export const addChannel = channel => ({
  type: channelActionTypes.ADD_CHANNEL,
  payload: channel
})
