import { combineReducers } from 'redux'

import conversationReducer from './coversationReducer'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  conversations: conversationReducer,
  messages: messageReducer
})

export default rootReducer