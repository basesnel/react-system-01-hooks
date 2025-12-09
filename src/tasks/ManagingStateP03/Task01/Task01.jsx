import { useReducer } from 'react';
import { FlexBox } from 'components';
import { initialState, messengerReducer } from './messengerReducer';
import { ChatT01, ContactListT01 } from '../IntendendComponents';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

const Task01 = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find(c => c.id === state.selectedId);

  return (
    <FlexBox direction="column-reverse">
      <ContactListT01
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <ChatT01
        key={contact.id}
        message={message}
        contact={contact}
        name="TextAreaT01"
        dispatch={dispatch}
      />
    </FlexBox>
  );
};

export default Task01;
