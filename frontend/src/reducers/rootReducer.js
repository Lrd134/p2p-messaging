import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import conversationReducer from './conversationReducer'
import messageReducer from './messageReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  conversations: conversationReducer,
  messages: messageReducer,
  users: userReducer,
  session: sessionReducer
})

export default rootReducer