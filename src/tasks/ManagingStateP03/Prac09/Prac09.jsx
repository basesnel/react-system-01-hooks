import { HeadingsP08 } from '../IntendendComponents';
import Section from './Section';

const Prac09 = () => {
  return (
    <Section>
      <HeadingsP08>My Profile</HeadingsP08>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
};

const AllPosts = () => {
  return (
    <Section>
      <HeadingsP08>Posts</HeadingsP08>
      <RecentPosts />
    </Section>
  );
};

const RecentPosts = () => {
  return (
    <Section>
      <HeadingsP08>Recent posts</HeadingsP08>
      <Post title="Flavors of Lisbon" body="...those pasteis de nata!" />
      <Post title="Buenos Aires in the rithm of tango" body="I love it!" />
    </Section>
  );
};

const Post = ({ title, body }) => {
  return (
    <Section isFancy={true}>
      <HeadingsP08>{title}</HeadingsP08>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
};

export default Prac09;
