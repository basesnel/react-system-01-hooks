import { useState } from 'react';
import { HideOverflow, Title, NumberedList } from 'components';
import { modifiedTravelPlan } from 'constants';
import PlaceTree from './PlaceTree';

const Prac09 = () => {
  const [plan, setPlan] = useState(modifiedTravelPlan);
  const root = plan[0];
  const planets = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <HideOverflow>
      <Title level={3} caption="places to visit" />
      <NumberedList message="no items in the plan">
        {planets.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </NumberedList>
    </HideOverflow>
  );
};

export default Prac09;
