import SectionP09 from '../SectionP09';
import HeadingsP08 from '../HeadingsP08';
import PostP09 from '../PostP09';

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
      <PostP09 title="Flavors of Lisbon" body="...those pasteis de nata!" />
      <PostP09 title="Buenos Aires in the rithm of tango" body="I love it!" />
    </SectionP09>
  );
};

export default AllPostsP09;
