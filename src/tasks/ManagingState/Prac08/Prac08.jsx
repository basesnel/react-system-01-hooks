import { useState } from 'react';
import { initialTravelPlan } from 'constants';
import { Title } from 'components';

import styles from './styles.module.css';

const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;

  return (
    <li className={styles.item}>
      {place.title}
      {childPlaces.length > 0 && (
        <ol className={styles.list}>
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
};

const Prac08 = () => {
  const [plan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <>
      <Title level={3} caption="places to visit" />
      <ol className={styles.list}>
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
};

export default Prac08;
