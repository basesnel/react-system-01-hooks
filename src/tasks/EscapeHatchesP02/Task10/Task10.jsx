import { MdOutlineLanguage, MdPlace } from 'react-icons/md';
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
        <Select
          selectLabel="Pick a planet: "
          selectName="Planet09"
          selected={planet}
          list={planetList}
          icon={<MdOutlineLanguage />}
          onHandleSelect={e => setPlanet(e.target.value)}
        />
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
