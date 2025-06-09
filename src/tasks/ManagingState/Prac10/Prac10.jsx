import { useImmer } from 'use-immer';
import { Title, NumberedList } from 'components';
import { modifiedTravelPlan } from 'constants';
import PlaceTree from './PlaceTree';

const Prac10 = () => {
  const [plan, updatePlan] = useImmer(modifiedTravelPlan);
  const root = plan[0];
  const planets = root.childIds;

  const handleComplete = (parentId, childId) => {
    updatePlan(draft => {
      const parent = draft[parentId];
      parent.childIds = parent.childIds.filter(id => id !== childId);

      const deleteAllChildren = id => {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);
        delete draft[id];
      };

      deleteAllChildren(childId);
    });
  };

  return (
    <>
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
    </>
  );
};

export default Prac10;
