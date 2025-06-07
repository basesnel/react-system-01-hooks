import { useState } from 'react';
import { Title, NumberedList } from 'components';
import { initialTravelPlan } from 'constants';
import PlaceTree from './PlaceTree';

const Prac08 = () => {
  const [plan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <>
      <Title level={3} caption="places to visit" />
      <NumberedList message="no items in the plan">
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </NumberedList>
    </>
  );
};

export default Prac08;
