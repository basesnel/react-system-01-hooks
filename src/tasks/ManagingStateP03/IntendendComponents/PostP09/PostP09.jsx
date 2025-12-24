import PropTypes from 'prop-types';
import SectionP09 from '../SectionP09';
import HeadingsP08 from '../HeadingsP08';

const PostP09 = ({ title, body }) => {
  return (
    <SectionP09 isFancy={true}>
      <HeadingsP08>{title}</HeadingsP08>
      <p>
        <i>{body}</i>
      </p>
    </SectionP09>
  );
};

PostP09.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostP09;
