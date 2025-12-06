import { Heading } from 'components';
import { SectionP05 } from '../IntendendComponents';

const Prac06 = () => {
  return (
    <SectionP05>
      <Heading level={1}>Title</Heading>
      <SectionP05>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <SectionP05>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <SectionP05>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </SectionP05>
        </SectionP05>
      </SectionP05>
    </SectionP05>
  );
};

export default Prac06;
