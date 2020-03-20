import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import channelReducer from "./channel/channel.reducer";
import messageReducer from "./message/message.reducer";

export default combineReducers({
  user: userReducer,
  channel: channelReducer,
  message: messageReducer
});
