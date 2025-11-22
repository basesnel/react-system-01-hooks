import { useState } from 'react';
import { FlexBox } from 'components';
import { ChatP14, ContactListP14 } from '../intendendComponents';
import { initialContacts } from 'constants';

const Prac15 = () => {
  const [to, setTo] = useState(initialContacts[0]);

  return (
    <FlexBox direction="column-reverse">
      <ContactListP14
        contacts={initialContacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <ChatP14 key={to.id} contact={to} name="Prac15Text" />
    </FlexBox>
  );
};

export default Prac15;
