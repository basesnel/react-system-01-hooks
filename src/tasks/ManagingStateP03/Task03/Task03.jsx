import { useReducer } from 'react';
import { initialState, messengerReducer } from './messengerReducer';
import ContactList from './ContactList';
import { FlexBox } from 'components';
import { ChatT03 } from '../IntendendComponents';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Task03 = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find(c => c.id === state.selectedId);

  return (
    <FlexBox direction="column-reverse">
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <ChatT03
        key={contact.id}
        message={message}
        contact={contact}
        name="TextAreaT03"
        dispatch={dispatch}
      />
    </FlexBox>
  );
};

export default Task03;
