import PropTypes from 'prop-types';
import { Button, P, Title } from 'components';

import styles from './styles.module.css';

const PanelP02 = ({ title, children, isActive }) => {
  return (
    <section className={styles.panel}>
      <Title level={4} caption={title} />
      {isActive ? (
        <P>{children}</P>
      ) : (
        <Button caption="Show" onClick={() => {}} />
      )}
    </section>
  );
};

PanelP02.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default PanelP02;
