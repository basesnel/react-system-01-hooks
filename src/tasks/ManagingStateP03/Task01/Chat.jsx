import { toast } from 'react-toastify';
import { MdChat } from 'react-icons/md';
import { TextArea, Button, Form } from 'components';

const Chat = ({ contact, message, name, dispatch }) => {
  const handleChatSubmit = event => {
    event.preventDefault();
    dispatch({
      type: 'edited_message',
      message: '',
    });

    if (!message.trim().length) {
      return toast.error(`Text-field is empty - please, enter it!`);
    }

    return toast.success(`${message} sent!`);
  };

  return (
    <Form onSubmit={handleChatSubmit}>
      <TextArea
        textAreaName={name}
        textAreaValue={message}
        handleChange={e => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
        textAreaPlaceholder={'Chat to ' + contact.name}
        icon={<MdChat />}
      />
      {/* <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      /> */}
      <br />
      <Button type="submit" caption={`Send to ${contact.email}`} />
      {/* <button>Send to {contact.email}</button> */}
    </Form>
  );
};

export default Chat;
