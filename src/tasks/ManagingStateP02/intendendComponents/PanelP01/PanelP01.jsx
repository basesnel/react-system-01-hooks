import { useState } from 'react';
import PropTypes from 'prop-types';
import { H, P, Button } from 'components';

import styles from './styles.module.css';

const PanelP01 = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={styles.panel}>
      <H level={4}>{title}</H>
      {isActive ? (
        <P>{children}</P>
      ) : (
        <Button caption="Show" onClick={() => setIsActive(true)} />
      )}
    </section>
  );
};

PanelP01.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default PanelP01;
