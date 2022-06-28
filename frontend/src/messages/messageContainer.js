import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Message from './message.js';

function MessageContainer(props) {
  const { conversationId } = useParams();
  const [message, setMessage] = useState("");

  const renderMessages = () => props.messages.messages.filter(message => parseInt(message.attributes.conversation_id) === parseInt(conversationId))
   .map(message => <Message key={message.id} message={message} userId={props.userId}/>)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = event => {
    setMessage(event.target.value);
  }
  return (
    <main>  
      {renderMessages()}
      <form onSubmit={handleSubmit}>
      <input type="text" value={message} name="message" onChange={handleChange} />

      </form>
    </main>
  )
}


export default MessageContainer;