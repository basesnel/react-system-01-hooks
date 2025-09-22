import PropTypes from 'prop-types';
import { Button, P, Title } from 'components';

import styles from './styles.module.css';

const Prac02 = () => {
  return (
    <>
      <Title level={3} caption="Almaty, Kazachstan" />
      <Panel title="About" isActive={true}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={true}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
};

const Panel = ({ title, children, isActive }) => {
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

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Prac02;
