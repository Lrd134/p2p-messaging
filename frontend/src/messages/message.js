function Message(props) {
  const date = new Date(props.message.attributes.creator.sentAt)
  const getTwelveHours = () => {
    if (date.getHours() > 11) {
      return `${date.getHours() - 11}:${date.getMinutes() + 1} P.M.`;
    }
    return `${date.getHours() + 1}:${date.getMinutes() + 1} A.M.`;
  }
  return (
    <div className="message-container creator"> 
      <div className="date">
        {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${getTwelveHours()}`}
      </div>
      <div className="message">
        {props.message.attributes.text}
      </div>
    </div>
  )
}

export default Message;





