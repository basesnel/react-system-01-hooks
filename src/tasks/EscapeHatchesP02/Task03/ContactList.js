import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';

export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <FlexBox>
      {contacts.map(contact => (
        <DecoratedButton
          key={contact.id}
          caption={
            contact.id === selectedId ? <b>{contact.name}</b> : contact.name
          }
          onClick={() => {
            onSelect(contact.id);
          }}
        />
      ))}
    </FlexBox>
  );
}
