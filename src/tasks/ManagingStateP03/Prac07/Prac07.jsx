import { HeadingsP07, SectionP07 } from '../IntendendComponents';

const Prac07 = () => {
  return (
    <SectionP07 level={1}>
      <HeadingsP07>Title</HeadingsP07>
      <SectionP07 level={2}>
        <HeadingsP07>Heading</HeadingsP07>
        <HeadingsP07>Heading</HeadingsP07>
        <HeadingsP07>Heading</HeadingsP07>
        <SectionP07 level={3}>
          <HeadingsP07>Sub-heading</HeadingsP07>
          <HeadingsP07>Sub-heading</HeadingsP07>
          <HeadingsP07>Sub-heading</HeadingsP07>
          <SectionP07 level={4}>
            <HeadingsP07>Sub-sub-heading</HeadingsP07>
            <HeadingsP07>Sub-sub-heading</HeadingsP07>
            <HeadingsP07>Sub-sub-heading</HeadingsP07>
          </SectionP07>
        </SectionP07>
      </SectionP07>
    </SectionP07>
  );
};

export default Prac07;
