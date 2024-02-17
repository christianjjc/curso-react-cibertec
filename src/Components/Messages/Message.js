import './Message.css';

function Message(props) {
  const attrs = { className: 'cls-message', id: 'cls-message' };
  const data = <span>Javier</span>;
  const styles = { color: 'blue', fontSize: '20px' };
  return (
    <div {...attrs} style={styles}>
      Mi Mensaje es: {props.message} {data}
    </div>
  );
}

export default Message;
