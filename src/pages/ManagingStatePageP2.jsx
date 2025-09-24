import { Container, Title, P, Grid, Card } from 'components';

import { managingStateP2 } from 'tasks';

const ManagingStatePageP2 = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
    Prac04,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Prac09,
    Prac10,
    Prac11,
    Prac12,
    Task01,
    Task02,
    // Task03,
    // Task04,
    // Task05,
    // Task06,
    // Task07,
    // Task08,
    // Task09,
  } = managingStateP2;

  return (
    <main>
      <Container>
        <Title level={1} caption="managing state, part II" />
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: lifting state up">
            <Prac01 />
          </Card>
          <Card title="prac 02: pass hardcoded value">
            <Prac02 />
          </Card>
          <Card title="prac 03: set up lifting state up">
            <Prac03 />
          </Card>
          <Card title="task 01: synced inputs">
            <Task01 />
          </Card>
          <Card title="task 02: profile editor">
            <Task02 />
          </Card>
          <Card title="prac 04: state is tied to a position in the render tree">
            <Prac04 />
          </Card>
          <Card title="prac 05: group related state">
            <Prac05 />
          </Card>
          <Card title="prac 06: same component at the same position preserves state">
            <Prac06 />
          </Card>
          <Card title="prac 07: pitfall of the position in the ui-tree">
            <Prac07 />
          </Card>
          <Card title="prac 08: diffrent components at the same position reset state">
            <Prac08 />
          </Card>
          <Card title="prac 09: resetting state in the component's subtree">
            <Prac09 />
          </Card>
          <Card title="prac 10: pitfall of nest component definition">
            <Prac10 />
          </Card>
          <Card title="prac 11: resetting state at the same position">
            <Prac11 />
          </Card>
          <Card title="prac 12: resetting state at the same position - option 1">
            <Prac12 />
          </Card>
          {/* <Card title="task 03: profile editor without react">
            <Task03 />
          </Card>
          <Card title="task 04: fix a component that's not updating">
            <Task04 />
          </Card>
          <Card title="task 05: fix a brocken packing list">
            <Task05 />
          </Card>
          <Card title="task 06: fix the disappearing selection">
            <Task06 />
          </Card>
          <Card title="task 07: impliment multiple selection">
            <Task07 />
          </Card>
          <Card title="task 08: impliment multiple selection (alternate)">
            <Task08 />
          </Card>
          <Card title="task 09: impliment multiple selection (alternate)">
            <Task09 />
          </Card> */}
        </Grid>
      </Container>
    </main>
  );
};

export { ManagingStatePageP2 };
