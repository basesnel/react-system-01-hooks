import { Box, FlexBox, Span } from 'components';
import PropTypes from 'prop-types';

const Clock = props => {
  const { color, time } = props;

  return (
    <Box>
      <FlexBox>
        <Span weighted color={color}>
          {time}
        </Span>
      </FlexBox>
    </Box>
  );
};

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Clock;
