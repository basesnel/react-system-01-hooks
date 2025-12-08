import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LevelContext } from 'contexts/mpiiiContexts/LevelContextP08';
import { Heading } from 'components';

const HeadingsP08 = ({ children }) => {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error('Heading must be inside a section!');
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

HeadingsP08.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default HeadingsP08;
