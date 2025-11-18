const Chat = ({ contact, message }) => {
  return (
    <section>
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={() => {}}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
};

export default Chat;
