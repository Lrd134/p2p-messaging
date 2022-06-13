import { Link } from 'react-router-dom';
const Conversation = ({conversation}) => {
  console.log("DATAAAA for" + conversation.text);
  console.table(conversation)
  return (
    <Link to={`/conversations/${conversation.conversation_id}`}>
    <div>
      {conversation.attributes.text}
    </div>
    </Link>
  )
}

export default Conversation