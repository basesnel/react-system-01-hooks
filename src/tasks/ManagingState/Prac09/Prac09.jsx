import { useState } from 'react';
import { modifiedTravelPlan } from 'constants';
import { Title } from 'components';

import styles from './styles.module.css';

const PlaceTree = ({ id, placesById }) => {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li className={styles.item}>
      {place.title}
      {childIds.length > 0 && (
        <ol className={styles.list}>
          {childIds.map(childId => (
            <PlaceTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
};

const Prac09 = () => {
  const [plan] = useState(modifiedTravelPlan);
  const root = plan[0];
  const planets = root.childIds;

  return (
    <>
      <Title level={3} caption="places to visit" />
      <ol className={styles.list}>
        {planets.map(id => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
};

export default Prac09;
