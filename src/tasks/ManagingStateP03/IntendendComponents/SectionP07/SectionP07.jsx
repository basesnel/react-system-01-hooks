import { LevelContext } from 'contexts/mpiiiContexts/LevelContextP07';
import styles from './styles.module.css';

const SectionP07 = ({ level, children }) => {
  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
};

export default SectionP07;
