import { useState } from 'react';

const Contact = ({ contact }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? 'Hide' : 'Show'}
      </button>
    </>
  );
};

export default Contact;
