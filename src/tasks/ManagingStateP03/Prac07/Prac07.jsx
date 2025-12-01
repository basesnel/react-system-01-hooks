import Section from './Section';
import Headings from './Headings';

const Prac07 = () => {
  return (
    <Section level={1}>
      <Headings>Title</Headings>
      <Section level={2}>
        <Headings>Heading</Headings>
        <Headings>Heading</Headings>
        <Headings>Heading</Headings>
        <Section level={3}>
          <Headings>Sub-heading</Headings>
          <Headings>Sub-heading</Headings>
          <Headings>Sub-heading</Headings>
          <Section level={4}>
            <Headings>Sub-sub-heading</Headings>
            <Headings>Sub-sub-heading</Headings>
            <Headings>Sub-sub-heading</Headings>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default Prac07;
