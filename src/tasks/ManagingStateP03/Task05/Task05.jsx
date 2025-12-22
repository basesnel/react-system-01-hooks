import { useContext, useState } from 'react';
import { places } from './data';
import { getImageUrl } from './utils';
import { imageSizeContext } from './Context';

import styles from './styles.module.css';

const Task05 = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <imageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <List />
    </imageSizeContext.Provider>
  );
};

const List = () => {
  const listItems = places.map(place => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul className={styles.list}>{listItems}</ul>;
};

const Place = ({ place }) => {
  return (
    <figure className={styles.figure}>
      <PlaceImage place={place} />
      <figcaption className={styles.figcaption}>
        <b>{place.name}</b>
        {': ' + place.description}
      </figcaption>
    </figure>
  );
};

const PlaceImage = ({ place }) => {
  const imageSize = useContext(imageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      className={styles.image}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default Task05;
