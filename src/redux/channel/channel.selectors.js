import { createSelector } from 'reselect'


const selectChannel = state => state.channel

export const selectAllChannels = createSelector(
  [selectChannel],
  channel => channel.channels
)
