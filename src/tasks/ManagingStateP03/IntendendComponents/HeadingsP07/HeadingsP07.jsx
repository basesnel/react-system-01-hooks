import { useContext } from 'react';
import { Heading } from 'components';
import { LevelContext } from 'contexts/LevelContext';

const Headings = ({ children }) => {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <Heading level={1}>{children}</Heading>;
    case 2:
      return <Heading level={2}>{children}</Heading>;
    case 3:
      return <Heading level={3}>{children}</Heading>;
    case 4:
      return <Heading level={4}>{children}</Heading>;
    case 5:
      return <Heading level={5}>{children}</Heading>;
    case 6:
      return <Heading level={6}>{children}</Heading>;
    default:
      throw Error('Unknown level: ' + level);
  }
};

export default Headings;
