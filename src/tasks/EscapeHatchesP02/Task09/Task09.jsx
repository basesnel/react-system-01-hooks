import { useState, useEffect } from 'react';
import { MdOutlineLanguage, MdPlace } from 'react-icons/md';
import { FlexBox, Select, P } from 'components';
import { fetchData } from 'services';

const Task09 = () => {
  const [planetList, setPlanetList] = useState([]);
  const [planet, setPlanet] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [place, setPlace] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanet(result[0]);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (planet === '') {
      return;
    }

    let ignore = false;
    fetchData('/planets/' + planet + '/places').then(result => {
      if (!ignore) {
        console.log('Fetched a list of places on "' + planet + '".');
        setPlaceList(result);
        setPlace(result[0]);
      }
    });
    return () => {
      ignore = true;
    };
  }, [planet]);

  return (
    <>
      <FlexBox align="flex-start">
        <Select
          selectLabel="Pick a planet: "
          selectName="PlanetT09"
          selected={planet}
          list={planetList}
          icon={<MdOutlineLanguage />}
          onHandleSelect={e => setPlanet(e.target.value)}
        />
        <Select
          selectLabel="Pick a place: "
          selectName="PlaceT09"
          selected={place}
          list={placeList}
          icon={<MdPlace />}
          onHandleSelect={e => setPlace(e.target.value)}
        />
      </FlexBox>
      <hr />
      <P>
        You are going to: {place || '???'} on {planet || '???'}
      </P>
    </>
  );
};

export default Task09;
