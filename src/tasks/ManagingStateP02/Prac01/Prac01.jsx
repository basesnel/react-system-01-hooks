import { Button, Paragraph, Title } from 'components';
import { useState } from 'react';

const Prac01 = () => {
  return (
    <>
      <Title level={3} caption="Almaty, Kazachstan" />
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
};

const Panel = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section>
      <h4>{title}</h4>
      {isActive ? (
        <Paragraph>{children}</Paragraph>
      ) : (
        <Button caption="Show" onClick={() => setIsActive(true)} />
      )}
    </section>
  );
};

export default Prac01;
