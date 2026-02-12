import { useState, useEffect } from 'react';
import { MdOutlineLanguage, MdPlace } from 'react-icons/md';
import { FlexBox, Select2, P } from 'components';
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
      <FlexBox align="flex-start" wrapped="wrap">
        <Select2
          label="Pick a planet: "
          name="PlanetT09"
          value={planet}
          list={planetList}
          icon={<MdOutlineLanguage />}
          onChange={e => setPlanet(e.target.value)}
        />
        <Select2
          label="Pick a place: "
          name="PlaceT09"
          value={place}
          list={placeList}
          icon={<MdPlace />}
          onChange={e => setPlace(e.target.value)}
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
