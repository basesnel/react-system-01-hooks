import PropTypes from 'prop-types';
import { Button, P, Title } from 'components';

import styles from './styles.module.css';

const PanelP03 = ({ title, children, isActive, onShow }) => {
  return (
    <section className={styles.panel}>
      <Title level={4} caption={title} />
      {isActive ? (
        <P>{children}</P>
      ) : (
        <Button caption="Show" onClick={onShow} />
      )}
    </section>
  );
};

PanelP03.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default PanelP03;
