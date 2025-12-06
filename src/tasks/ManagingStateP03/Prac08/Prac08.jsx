import { HeadingsP08 } from '../IntendendComponents';
import Section from './Section';

const Prac08 = () => {
  return (
    <Section>
      <HeadingsP08>Title</HeadingsP08>
      <Section>
        <HeadingsP08>Heading</HeadingsP08>
        <HeadingsP08>Heading</HeadingsP08>
        <HeadingsP08>Heading</HeadingsP08>
        <Section>
          <HeadingsP08>Sub-heading</HeadingsP08>
          <HeadingsP08>Sub-heading</HeadingsP08>
          <HeadingsP08>Sub-heading</HeadingsP08>
          <Section>
            <HeadingsP08>Sub-sub-heading</HeadingsP08>
            <HeadingsP08>Sub-sub-heading</HeadingsP08>
            <HeadingsP08>Sub-sub-heading</HeadingsP08>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default Prac08;
