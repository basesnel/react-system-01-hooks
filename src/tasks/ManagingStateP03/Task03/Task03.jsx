import { useReducer } from 'react';
import { initialState, messengerReducer } from './messengerReducer';
import { initialContacts } from 'constants';
import { FlexBox } from 'components';
import { ChatT03, ContactListT01 } from '../IntendendComponents';

const Task03 = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = initialContacts.find(c => c.id === state.selectedId);

  return (
    <FlexBox direction="column-reverse">
      <ContactListT01
        contacts={initialContacts}
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
