import PropTypes from 'prop-types';
import { NumberedList, Item, ItemFlex } from 'components';

const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;

  return (
    <Item>
      <ItemFlex>{place.title}</ItemFlex>
      {childPlaces.length > 0 && (
        <NumberedList message="no items in the plan">
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </NumberedList>
      )}
    </Item>
  );
};

PlaceTree.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    childPlaces: PropTypes.arrayOf(PropTypes.object.isRequired),
  }).isRequired,
};

PlaceTree.defaultProps = {
  place: { childPlaces: null },
};

export default PlaceTree;
