// import { MdChat } from 'react-icons/md';
import { Paragraph } from 'components';
import { useSelectOptions } from './useSelectOptions';

export default function Task10() {
  const [planetList, planetId, setPlanetId] = useSelectOptions('/planets');
  const [placeList, placeId, setPlaceId] = useSelectOptions(
    planetId ? `/planets/${planetId}/places` : null
  );

  return (
    <>
      <label>
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
            setPlaceId(e.target.value);
          }}
        >
          {placeList?.map(place => (
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
