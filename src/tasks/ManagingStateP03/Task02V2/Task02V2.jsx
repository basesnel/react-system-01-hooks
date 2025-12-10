import { useReducer } from 'react';
import { FlexBox } from 'components';
import { initialContacts } from 'constants';
import { ChatT02V2, ContactListT01 } from '../IntendendComponents';
import { initialState, messengerReducer } from './messengerReducer';

const Task02 = () => {
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
      <ChatT02V2
        key={contact.id}
        message={message}
        contact={contact}
        name="TextAreaT02V2"
        dispatch={dispatch}
      />
    </FlexBox>
  );
};

export default Task02;
