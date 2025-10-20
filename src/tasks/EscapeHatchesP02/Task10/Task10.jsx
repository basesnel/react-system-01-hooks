import { MdOutlineLanguage, MdPlace } from 'react-icons/md';
import { FlexBox, Select, P } from 'components';
import { useSelectOptions } from './useSelectOptions';

const Task10 = () => {
  const [planetList, planet, setPlanet] = useSelectOptions('/planets');
  const [placeList, place, setPlace] = useSelectOptions(
    planet ? `/planets/${planet}/places` : null
  );

  return (
    <>
      <FlexBox align="flex-start" wrapped="wrap">
        <Select
          selectLabel="Pick a planet: "
          selectName="PlanetT10"
          selected={planet}
          list={planetList}
          icon={<MdOutlineLanguage />}
          onHandleSelect={e => setPlanet(e.target.value)}
        />
        <Select
          selectLabel="Pick a place: "
          selectName="PlaceT10"
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

export default Task10;
