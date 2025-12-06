import { LevelContext } from 'contexts/LevelContext';
import styles from './styles.module.css';

const Section = ({ level, children }) => {
  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
};

export default Section;
