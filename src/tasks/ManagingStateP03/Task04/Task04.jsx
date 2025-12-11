import { useReducer } from './myReact';
import { FlexBox } from 'components';
import { initialContacts } from 'constants';
import { initialState, messengerReducer } from './messengerReducer';
import { ChatT03, ContactListT01 } from '../IntendendComponents';

const Task04 = () => {
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
        dispatch={dispatch}
        name="TextAreaT04"
      />
    </FlexBox>
  );
};

export default Task04;
