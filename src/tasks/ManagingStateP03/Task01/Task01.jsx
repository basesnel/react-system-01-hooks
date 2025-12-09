import { useReducer } from 'react';
import { FlexBox } from 'components';
import { initialContacts } from 'constants';
import { initialState, messengerReducer } from './messengerReducer';
import { ChatT01, ContactListT01 } from '../IntendendComponents';

const Task01 = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = initialContacts.find(c => c.id === state.selectedId);

  return (
    <FlexBox direction="column-reverse">
      <ContactListT01
        contacts={initialContacts}
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
