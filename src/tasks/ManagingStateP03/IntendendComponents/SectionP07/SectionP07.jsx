import PropTypes from 'prop-types';
import { LevelContext } from 'contexts/mpiiiContexts/LevelContextP07';
import styles from './styles.module.css';

const SectionP07 = ({ level, children }) => {
  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
};

SectionP07.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionP07;
