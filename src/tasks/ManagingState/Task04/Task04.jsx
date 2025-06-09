import { useState, useEffect } from 'react';
import Clock from './Clock';
// import { Form, Paragraph, FlexBox, Button, Span } from 'components';

// import styles from './styles.module.css';

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

const Task04 = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </>
  );
};

export default Task04;
