import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ItemFlex, ItemText } from 'components';

const ContactT07 = ({ contact }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ItemFlex>
      <ItemText content={<b>{contact.name}</b>} />
      {expanded && <ItemText content={<i>{contact.email}</i>} />}
      <Button
        caption={expanded ? 'Hide' : 'Show'}
        onClick={() => {
          setExpanded(!expanded);
        }}
      />
    </ItemFlex>
  );
};

ContactT07.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactT07;
