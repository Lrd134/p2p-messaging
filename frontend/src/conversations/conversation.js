import { Link } from 'react-router-dom';
const Conversation = ({conversation}) => {
  console.log("DATAAAA for" + conversation.text);
  console.table(conversation)
  return (
    <Link to={`/messages/${conversation.id}`}>
    <div>
      {conversation.text}
    </div>
    </Link>
  )
}

export default Conversation