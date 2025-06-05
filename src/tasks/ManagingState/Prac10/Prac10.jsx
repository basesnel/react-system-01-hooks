import { useImmer } from 'use-immer';
import { FiCheckCircle } from 'react-icons/fi';
import { Title, IconButton, ItemFlex, Item } from 'components';
import { modifiedTravelPlan } from 'constants';

import styles from './styles.module.css';

const PlaceTree = ({ id, parentId, placesById, onComplete }) => {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    // <li className={styles.item}>
    <Item>
      <ItemFlex>
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
      {/* </li> */}
    </Item>
  );
};

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

export default Prac10;
