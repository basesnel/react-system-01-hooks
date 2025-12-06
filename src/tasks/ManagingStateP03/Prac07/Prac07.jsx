import Section from './Section';
import { HeadingsP07 } from '../IntendendComponents';

const Prac07 = () => {
  return (
    <Section level={1}>
      <HeadingsP07>Title</HeadingsP07>
      <Section level={2}>
        <HeadingsP07>Heading</HeadingsP07>
        <HeadingsP07>Heading</HeadingsP07>
        <HeadingsP07>Heading</HeadingsP07>
        <Section level={3}>
          <HeadingsP07>Sub-heading</HeadingsP07>
          <HeadingsP07>Sub-heading</HeadingsP07>
          <HeadingsP07>Sub-heading</HeadingsP07>
          <Section level={4}>
            <HeadingsP07>Sub-sub-heading</HeadingsP07>
            <HeadingsP07>Sub-sub-heading</HeadingsP07>
            <HeadingsP07>Sub-sub-heading</HeadingsP07>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default Prac07;
