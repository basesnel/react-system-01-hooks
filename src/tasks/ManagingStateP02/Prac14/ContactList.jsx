import { Button } from 'components';

import styles from './styles.module.css';

const ContactList = ({ contacts, onSelect }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Button
            caption={contact.name}
            full
            onClick={() => {
              onSelect(contact);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
