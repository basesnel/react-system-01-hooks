import Heading from './Heading';
import Section from './Section';

const Prac09 = () => {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
};

const AllPosts = () => {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
};

const RecentPosts = () => {
  return (
    <Section>
      <Heading>Recent posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pasteis de nata!" />
      <Post title="Buenos Aires in the rithm of tango" body="I love it!" />
    </Section>
  );
};

const Post = ({ title, body }) => {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
};

export default Prac09;
