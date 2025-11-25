import { useReducer } from 'react';
import { initialState, messengerReducer } from './messengerReducer';
import ContactList from './ContactList';
import Chat from './Chat';
import { FlexBox } from 'components';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Task02 = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find(c => c.id === state.selectedId);

  return (
    <FlexBox direction="column-reverse">
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        name="TextAreaT02"
        dispatch={dispatch}
      />
    </FlexBox>
  );
};

export default Task02;
