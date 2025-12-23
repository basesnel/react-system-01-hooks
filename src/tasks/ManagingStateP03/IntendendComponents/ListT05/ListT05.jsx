import { useContext } from 'react';
import { paintedHouses, getImageUrl } from 'constants';

import { imageSizeContext } from 'contexts/mpiiiContexts/imageSizeContextT05';

import styles from './styles.module.css';

const ListT05 = () => {
  const listItems = paintedHouses.map(place => (
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

export default ListT05;
