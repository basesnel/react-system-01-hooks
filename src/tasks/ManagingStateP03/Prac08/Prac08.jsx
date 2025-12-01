import Headings from './Headings';
import Section from './Section';

const Prac08 = () => {
  return (
    <Section>
      <Headings>Title</Headings>
      <Section>
        <Headings>Headings</Headings>
        <Headings>Headings</Headings>
        <Headings>Headings</Headings>
        <Section>
          <Headings>Sub-heading</Headings>
          <Headings>Sub-heading</Headings>
          <Headings>Sub-heading</Headings>
          <Section>
            <Headings>Sub-sub-heading</Headings>
            <Headings>Sub-sub-heading</Headings>
            <Headings>Sub-sub-heading</Headings>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default Prac08;
