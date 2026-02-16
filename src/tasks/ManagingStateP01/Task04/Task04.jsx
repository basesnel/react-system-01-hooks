import { useState, useEffect } from 'react';
import { CgColorPicker } from 'react-icons/cg';
import Clock from './Clock';
import { FlexBox, Select2 } from 'components';

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
        <Select2
          label="Choose the color: "
          name="colorPickerT04"
          value={color}
          list={colorList}
          icon={<CgColorPicker />}
          onChange={e => setColor(e.target.value)}
        />
      </FlexBox>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </>
  );
};

export default Task04;
