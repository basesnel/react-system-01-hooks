import { Container, Title, P, Grid, Card } from 'components';

import { managingStateP3 } from 'tasks';

const ManagingStatePageP3 = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
    // Prac04,
    // Prac05,
    // Prac06,
    // Prac07,
    // Prac08,
    // Prac09,
    // Prac10,
    // Prac11,
    // Prac12,
    // Prac13,
    // Prac14,
    // Prac15,
    // Task01,
    // Task02,
    // Task03,
    // Task04,
    // Task05,
    // Task06,
    // Task07,
  } = managingStateP3;

  return (
    <main>
      <Container>
        <Title level={1} caption="managing state - part iii" />
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: tasks bu usestate-hook">
            <Prac01 />
          </Card>
          <Card title="prac 02: tasks by usereducer-hook">
            <Prac02 />
          </Card>
          <Card title="prac 03: tasks with extracted tasksReducer">
            <Prac03 />
          </Card>
          {/* <Card title="task 01: synced inputs">
            <Task01 />
          </Card>
          <Card title="task 02: filtering a list">
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
          <Card title="prac 12: resetting a component in diffrent positions - option 1">
            <Prac12 />
          </Card>
          <Card title="prac 13: resetting state with a key - option 2">
            <Prac13 />
          </Card>
          <Card title="prac 14: resetting a form with key">
            <Prac14 />
          </Card>
          <Card title="prac 15: resetting a form with key - fixed">
            <Prac15 />
          </Card>
          <Card title="task 03: fix disappering input text">
            <Task03 />
          </Card>
          <Card title="task 04: fix a component that's not updating">
            <Task04 />
          </Card>
          <Card title="task 05: reset a detail form">
            <Task05 />
          </Card>
          <Card title="task 06: clear an image while it's loading">
            <Task06 />
          </Card>
          <Card title="task 07: fix misplaced state in the list">
            <Task07 />
          </Card> */}
        </Grid>
      </Container>
    </main>
  );
};

export { ManagingStatePageP3 };
