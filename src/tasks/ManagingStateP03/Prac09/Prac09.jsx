import PropTypes from 'prop-types';
import { HeadingsP08, SectionP09 } from '../IntendendComponents';

const Prac09 = () => {
  return (
    <SectionP09>
      <HeadingsP08>My Profile</HeadingsP08>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </SectionP09>
  );
};

const AllPosts = () => {
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

export default Prac09;
