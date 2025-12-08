import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LevelContext } from 'contexts/mpiiiContexts/LevelContextP08';
import styles from './styles.module.css';

const SectionP09 = ({ isFancy, children }) => {
  const level = useContext(LevelContext);

  return (
    <section className={`${styles.section} ${isFancy ? styles.isFancy : ''}`}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

SectionP09.propTypes = {
  isFancy: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SectionP09.defaultProps = {
  isFancy: false,
};

export default SectionP09;
