import Headings from './Headings';
import Section from './Section';

const Prac09 = () => {
  return (
    <Section>
      <Headings>My Profile</Headings>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
};

const AllPosts = () => {
  return (
    <Section>
      <Headings>Posts</Headings>
      <RecentPosts />
    </Section>
  );
};

const RecentPosts = () => {
  return (
    <Section>
      <Headings>Recent posts</Headings>
      <Post title="Flavors of Lisbon" body="...those pasteis de nata!" />
      <Post title="Buenos Aires in the rithm of tango" body="I love it!" />
    </Section>
  );
};

const Post = ({ title, body }) => {
  return (
    <Section isFancy={true}>
      <Headings>{title}</Headings>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
};

export default Prac09;
