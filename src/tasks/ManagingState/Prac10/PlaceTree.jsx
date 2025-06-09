import PropTypes from 'prop-types';
import { FiCheckCircle } from 'react-icons/fi';
import { NumberedList, IconButton, ItemFlex, Item } from 'components';

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
        <NumberedList message="no items in the plan">
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </NumberedList>
      )}
    </Item>
  );
};

PlaceTree.propTypes = {
  id: PropTypes.number.isRequired,
  parentId: PropTypes.number.isRequired,
  placesById: PropTypes.object,
  onComplete: PropTypes.func.isRequired,
};

PlaceTree.defaultProps = {
  placesById: null,
};

export default PlaceTree;
