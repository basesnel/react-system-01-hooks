import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Title, IconButton, ItemFlex, Item } from 'components';
import { modifiedTravelPlan } from 'constants';

import styles from './styles.module.css';

const PlaceTree = ({ id, parentId, placesById, onComplete }) => {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <Item>
      <ItemFlex spaceBetween>
        {place.title}
        <IconButton
          icon={<FiCheckCircle />}
          caption="complete"
          onClick={() => {
            onComplete(parentId, id);
          }}
        />
      </ItemFlex>
      {childIds.length > 0 && (
        <ol className={styles.list}>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </Item>
  );
};

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
    <>
      <Title level={3} caption="places to visit" />
      <ol className={styles.list}>
        {planets.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
};

export default Prac09;
