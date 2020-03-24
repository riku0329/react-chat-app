import { takeEvery, call, put, takeLatest } from "redux-saga/effects";

import {
  firestore,
  convertChannelsSnapShotToMap
} from "../../firebase/firebase.utils";

import { fetchChannelsFailure, fetchChannelsSuccess } from "./channel.actions";

import channelActionTypes from "./channel.types";

export function* fetchChannelsAsync() {
  try {
    const channelRef = firestore
      .collection("channel")
      .orderBy("createdAt", "asc")
      .limit(15)
    const snapShot = yield channelRef.get()
    const channelsMap = yield call(convertChannelsSnapShotToMap, snapShot)
      yield put(fetchChannelsSuccess(channelsMap));
  } catch (error) {
    yield put(fetchChannelsFailure(error.message));
  }
}

export function* fetchChannelsStart() {
  yield takeLatest(channelActionTypes.FETCH_CHANNELS_START, fetchChannelsAsync);
}
