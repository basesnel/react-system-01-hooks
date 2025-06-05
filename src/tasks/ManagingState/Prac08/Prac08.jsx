import { useState } from 'react';
import { Title, Item, ItemFlex } from 'components';
import { initialTravelPlan } from 'constants';

import styles from './styles.module.css';

const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;

  return (
    <Item>
      <ItemFlex>{place.title}</ItemFlex>
      {childPlaces.length > 0 && (
        <ol className={styles.list}>
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </Item>
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
