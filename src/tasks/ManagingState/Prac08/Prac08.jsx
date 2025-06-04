import { useState } from 'react';
import { initialTravelPlan } from './places';
import { Title } from 'components';

const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
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
      <ol>
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
};

export default Prac08;
