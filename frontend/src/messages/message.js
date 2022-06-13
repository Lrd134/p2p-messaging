import { Link } from 'react-router-dom';
const Message = ({message}) => {
  console.log("DATAAAA for" + message.text);
  console.table(message)
  return (
    <Link to={`/messages/${message.message_id}`}>
    <div>
      {message.attributes.text}
    </div>
    </Link>
  )
}

export default Message