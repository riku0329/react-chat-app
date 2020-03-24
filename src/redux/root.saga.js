import { all, call } from 'redux-saga/effects'

import {fetchChannelsStart} from './channel/channel.sagas'

export default function* rootSaga() {
  yield all([call(fetchChannelsStart)])
}
