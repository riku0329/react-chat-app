import messageActionTypes from './message.types'

export const getMessages = messages => ({
  type: messageActionTypes.GET_MESSAGE,
  payload: messages
})

export const getJoinUsers = uniqueUsers => ({
  type: messageActionTypes.JOIN_USERS,
  payload: uniqueUsers
})


export const setSearchResults = searchResults => ({
  type: messageActionTypes.SET_SEARCH_RESULTS,
  payload: searchResults
})

export const setSearchTherm = searchTherm => ({
  type: messageActionTypes.SET_SEARCH_THERM,
  payload: searchTherm
})
