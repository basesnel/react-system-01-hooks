import { MdOutlineLanguage, MdPlace } from 'react-icons/md';
import { FlexBox, Select2, P } from 'components';
import { useSelectOptions } from './useSelectOptions';

const Task10 = () => {
  const [planetList, planet, setPlanet] = useSelectOptions('/planets');
  const [placeList, place, setPlace] = useSelectOptions(
    planet ? `/planets/${planet}/places` : null
  );

  return (
    <>
      <FlexBox align="flex-start" wrapped="wrap">
        <Select2
          label="Pick a planet: "
          name="PlanetT10"
          value={planet}
          list={planetList}
          icon={<MdOutlineLanguage />}
          onChange={e => setPlanet(e.target.value)}
        />
        <Select2
          label="Pick a place: "
          name="PlaceT10"
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

export default Task10;
