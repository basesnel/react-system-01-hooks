import PropTypes from 'prop-types';

import styles from './styles.module.css';

const SectionP05 = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

SectionP05.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionP05;
