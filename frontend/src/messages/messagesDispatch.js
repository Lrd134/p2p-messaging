import { getMessagesAction, messageRequestAction } from '../actions/messageActions'
import { getConversationsAction } from '../actions/conversationActions'
const getMessages = user => {
  return dispatch => {
    dispatch(messageRequestAction)
    fetch(process.env.REACT_APP_BACKEND_URL + '/messages', {
      headers: {            
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify({
              user: {
                username: user.username,
                password: user.password
              }})

      }).then(resp => resp.json()).then(json => {
        console.log("received \n\n")
        console.log(json)
        if (typeof json === Array) {
          alert(json[0][0])
          
          return;
        }
        dispatch(getMessagesAction(json))
        dispatch(getConversationsAction(json))
      }).catch(error => console.log(error))
  }
}

export { getMessages };