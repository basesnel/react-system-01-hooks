import { Button } from 'components';

import styles from './styles.module.css';

const ContactList = ({ contacts, selectedId, dispatch }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Button
            caption={
              contact.id === selectedId ? <b>{contact.name}</b> : contact.name
            }
            full
            onClick={() => {
              dispatch({
                type: 'changed_selection',
                contactId: contact.id,
              });
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
