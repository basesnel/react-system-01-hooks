import { useContext, useState } from 'react';
import { places } from './data';
import { getImageUrl } from './utils';
import { imageSizeContext } from './Context';

const Task05 = () => {
  const [isLarge, setIsLarge] = useState(false);
  // const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <imageSizeContext.Provider value={isLarge ? 150 : 100}>
        <List />
      </imageSizeContext.Provider>
    </>
  );
};

const List = () => {
  const listItems = places.map(place => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

const Place = ({ place }) => {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
};

const PlaceImage = ({ place }) => {
  const imageSize = useContext(imageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default Task05;
