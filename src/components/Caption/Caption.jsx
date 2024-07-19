import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Caption = props => {
  const { text } = props;

  return (
    <div className={styles.wrapper}>
      <span>{text}</span>
    </div>
  );
};

Caption.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Caption;
