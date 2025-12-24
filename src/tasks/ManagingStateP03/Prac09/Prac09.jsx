import {
  AllPostsP09,
  HeadingsP08,
  SectionP09,
  PostP09,
} from '../IntendendComponents';

const Prac09 = () => {
  return (
    <SectionP09>
      <HeadingsP08>My Profile</HeadingsP08>
      <PostP09 title="Hello traveller!" body="Read about my adventures." />
      <AllPostsP09 />
    </SectionP09>
  );
};

export default Prac09;
