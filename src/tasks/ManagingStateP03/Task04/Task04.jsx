import { useReducer } from './myReact';
import { FlexBox } from 'components';
import { initialState, messengerReducer } from './messengerReducer';
import ContactList from './ContactList';
import { ChatT03 } from '../IntendendComponents';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Task04 = () => {
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
        dispatch={dispatch}
        name="TextAreaT04"
      />
    </FlexBox>
  );
};

export default Task04;
