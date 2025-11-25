import { useContext } from 'react';
import { LevelContext } from './LevelContext';
import styles from './styles.module.css';

const Section = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <LevelContext value={level + 1}>
      <section className={styles.section}>{children}</section>
    </LevelContext>
  );
};

export default Section;
