import { combineReducers } from 'redux'

import conversationReducer from './conversationReducer'
import messageReducer from './messageReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  conversations: conversationReducer,
  messages: messageReducer,
  users: userReducer
})

export default rootReducer