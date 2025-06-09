// import { useState } from 'react';

const Clock = props => {
  const { color, time } = props;
  // const [color] = useState(props.color);
  return <h3 style={{ color: color }}>{time}</h3>;
};

export default Clock;
