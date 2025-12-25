import PropTypes from 'prop-types';
import { LevelContextP07 } from 'contexts';
import styles from './styles.module.css';

const SectionP07 = ({ level, children }) => {
  return (
    <section className={styles.section}>
      <LevelContextP07.Provider value={level}>
        {children}
      </LevelContextP07.Provider>
    </section>
  );
};

SectionP07.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionP07;
