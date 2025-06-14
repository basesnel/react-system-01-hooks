import { useState, useEffect } from 'react';
import { CgColorPicker } from 'react-icons/cg';
import Clock from './Clock';
import { FlexBox, Select } from 'components';

const useTime = () => {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const colorList = ['lightcoral', 'midnightblue', 'rebeccapurple'];

const Task04 = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <>
      <FlexBox>
        <Select
          selectLabel="Choose the color: "
          selectName="colorPicker"
          selected={color}
          list={colorList}
          icon={<CgColorPicker />}
          onHandleSelect={e => setColor(e.target.value)}
        />
      </FlexBox>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </>
  );
};

export default Task04;
