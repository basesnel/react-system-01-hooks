import { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, NumberedList, Item, ItemFlex } from 'components';
import { initialTravelPlan } from 'constants';

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

PlaceTree.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    childPlaces: PropTypes.oneOf([
      null,
      PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          childPlaces: PropTypes.oneOf([
            null,
            PropTypes.arrayOf(PropTypes.object.isRequired),
          ]),
        }).isRequired
      ),
    ]),
  }).isRequired,
};

PlaceTree.defaultProps = {
  place: { childPlaces: null },
};

export default Prac08;
