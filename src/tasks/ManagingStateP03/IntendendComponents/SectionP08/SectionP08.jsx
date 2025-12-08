import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LevelContext } from 'contexts/mpiiiContexts/LevelContextP08';

import styles from './styles.module.css';

const SectionP08 = ({ children }) => {
  const level = useContext(LevelContext);

  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

SectionP08.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionP08;
