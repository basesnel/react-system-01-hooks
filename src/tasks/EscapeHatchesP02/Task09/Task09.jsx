import { useState, useEffect } from 'react';
// import { MdChat } from 'react-icons/md';
import { Paragraph } from 'components';
import { fetchData } from './api';

export default function Task09() {
  const [planetList, setPlanetList] = useState([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <label>
        Pick a planet:
        <select
          value={planetId}
          onChange={e => {
            setPlaceId(e.target.value);
          }}
        >
          {planetList.map(planet => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      {/* <Select
        selectLabel="Pick a planet: "
        selectName="Planet09"
        selected={planetId}
        list={planetList}
        icon={<MdChat />}
        onHandleSelect={e => setPlanetId(e.target.value)}
      /> */}
      <label>
        Pick a place:
        <select
          value={placeId}
          onChange={e => {
            setPlanetId(e.target.value);
          }}
        >
          {placeList.map(place => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      {/* <Select
        selectLabel="Pick a place: "
        selectName="Place09"
        selected={placeId}
        list={placeList}
        icon={<MdChat />}
        onHandleSelect={e => setPlaceId(e.target.value)}
      /> */}
      <hr />
      <Paragraph>
        You are going to: {placeId || '???'} on {planetId || '???'}
      </Paragraph>
    </>
  );
}
