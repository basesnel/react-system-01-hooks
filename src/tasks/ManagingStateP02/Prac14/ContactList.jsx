import { Button, Item, List } from 'components';

import styles from './styles.module.css';

const ContactList = ({ selectedContact, contacts, onSelect }) => {
  return (
    <div className={styles.contactList}>
      <List message="There no one in contact-list">
        {contacts.map(contact => (
          <Item key={contact.id}>
            <Button
              caption={contact.name}
              onClick={() => {
                onSelect(contact);
              }}
            />
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ContactList;
