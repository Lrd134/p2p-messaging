import { Link } from 'react-router-dom';
const Conversation = ({conversation}) => {
  return (
    <Link to={`/messages/${conversation.attributes.conversation_id}`}>
      <div>
        {conversation.attributes.text}
      </div>
    </Link>
  )
}

export default Conversation