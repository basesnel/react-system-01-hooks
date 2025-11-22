import { useState } from 'react';
import { FlexBox } from 'components';
import { ChatP14, ContactListP14 } from '../intendendComponents';
import { initialContacts } from 'constants';

const Prac14 = () => {
  const [to, setTo] = useState(initialContacts[0]);

  return (
    <FlexBox direction="column-reverse">
      <ContactListP14
        contacts={initialContacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <ChatP14 contact={to} name="Prac14Text" />
    </FlexBox>
  );
};

export default Prac14;
