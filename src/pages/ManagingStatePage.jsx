import { Container, Title, Paragraph, Grid, Card } from 'components';

import { managingState } from 'tasks';

const ManagingStatePage = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
    Prac04,
    //   Prac05,
    //   Prac06,
    //   Prac07,
    //   Prac08,
    Task01,
    Task02,
    Task03,
    //   Task04,
  } = managingState;

  return (
    <main>
      <Container>
        <Title level={1} caption="array in state" />
        <Paragraph>Array in state of React-component case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: reacting to input with state">
            <Prac01 />
          </Card>
          <Card title="prac 02: mocking up from">
            <Prac02 />
          </Card>
          <Card title="prac 03: “living styleguides” or “storybooks”">
            <Prac03 />
          </Card>
          <Card title="task 01: add and remove a css class">
            <Task01 />
          </Card>
          <Card title="task 02: profile editor">
            <Task02 />
          </Card>
          <Card title="task 03: profile editor without react">
            <Task03 />
          </Card>
          <Card title="prac 04: redundant state">
            <Prac04 />
          </Card>
          {/* <Card title="prac 08: write concise update logic with immer">
            <Prac08 />
          </Card>
          <Card title="task 01: update an item in the shopping cart">
            <Task01 />
          </Card>
          <Card title="task 02: remove an item in the shopping cart">
            <Task02 />
          </Card>
          <Card title="task 03: fix the mutations using non-mutative methods">
            <Task03 />
          </Card>
          <Card title="task 04: fix the mutations using immer">
            <Task04 />
          </Card> */}
        </Grid>
      </Container>
    </main>
  );
};

export { ManagingStatePage };
