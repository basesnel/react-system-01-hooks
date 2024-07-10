import { PiPlanetFill } from 'react-icons/pi';
import { MdPlace } from 'react-icons/md';
import { FlexBox, Select, Paragraph } from 'components';
import { useSelectOptions } from './useSelectOptions';

const Task10 = () => {
  const [planetList, planet, setPlanet] = useSelectOptions('/planets');
  const [placeList, place, setPlace] = useSelectOptions(
    planet ? `/planets/${planet}/places` : null
  );

  return (
    <>
      <FlexBox>
        {/* <label>
        Pick a planet:
        <select
          value={planetId}
          onChange={e => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList?.map(planet => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label> */}
        <Select
          selectLabel="Pick a planet: "
          selectName="Planet09"
          selected={planet}
          list={planetList}
          icon={<PiPlanetFill />}
          onHandleSelect={e => setPlanet(e.target.value)}
        />
        {/* <label>
        Pick a place:
        <select
          value={placeId}
          onChange={e => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList?.map(place => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label> */}
        <Select
          selectLabel="Pick a place: "
          selectName="Place09"
          selected={place}
          list={placeList}
          icon={<MdPlace />}
          onHandleSelect={e => setPlace(e.target.value)}
        />
      </FlexBox>
      <hr />
      <Paragraph>
        You are going to: {place || '???'} on {planet || '???'}
      </Paragraph>
    </>
  );
};

export default Task10;
