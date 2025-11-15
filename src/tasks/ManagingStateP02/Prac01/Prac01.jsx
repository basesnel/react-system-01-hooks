import { Title } from 'components';
import { PanelP01 } from '../intendendComponents';

const Prac01 = () => {
  return (
    <>
      <Title level={3} caption="Almaty, Kazachstan" />
      <PanelP01 title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </PanelP01>
      <PanelP01 title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </PanelP01>
    </>
  );
};

export default Prac01;
