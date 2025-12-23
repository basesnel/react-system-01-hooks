import PropTypes from 'prop-types';
import SectionP09 from '../SectionP09';
import HeadingsP08 from '../HeadingsP08';
// import { HeadingsP08, SectionP09 } from '../IntendendComponents';

const AllPostsP09 = () => {
  return (
    <SectionP09>
      <HeadingsP08>Posts</HeadingsP08>
      <RecentPosts />
    </SectionP09>
  );
};

const RecentPosts = () => {
  return (
    <SectionP09>
      <HeadingsP08>Recent posts</HeadingsP08>
      <Post title="Flavors of Lisbon" body="...those pasteis de nata!" />
      <Post title="Buenos Aires in the rithm of tango" body="I love it!" />
    </SectionP09>
  );
};

const Post = ({ title, body }) => {
  return (
    <SectionP09 isFancy={true}>
      <HeadingsP08>{title}</HeadingsP08>
      <p>
        <i>{body}</i>
      </p>
    </SectionP09>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export { AllPostsP09, Post };
