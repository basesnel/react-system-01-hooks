import { useState } from 'react';

const Clock = props => {
  const [color] = useState(props.color);
  return <h3 style={{ color: color }}>{props.time}</h3>;
};

export default Clock;
