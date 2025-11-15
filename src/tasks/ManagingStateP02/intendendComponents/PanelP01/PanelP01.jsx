import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, P, Title } from 'components';

import styles from './styles.module.css';

const PanelP01 = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={styles.panel}>
      <Title level={4} caption={title} />
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
