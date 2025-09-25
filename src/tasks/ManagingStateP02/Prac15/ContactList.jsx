import styles from './styles.module.css';

const ContactList = ({ selectedContact, contacts, onSelect }) => {
  return (
    <div className={styles.contactList}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
