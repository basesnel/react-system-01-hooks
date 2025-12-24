import { Container, P, Grid, Card, Heading } from 'components';

import { managingStateP3 } from 'tasks';

const ManagingStatePageP3 = () => {
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
    // Prac12,
    // Prac13,
    // Prac14,
    // Prac15,
    Task01,
    Task02,
    Task02V2,
    Task03,
    Task04,
    Task05,
    // Task06,
    // Task07,
  } = managingStateP3;

  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          managing state - part iii
        </Heading>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: tasks by usestate-hook">
            <Prac01 />
          </Card>
          <Card title="prac 02: tasks by usereducer-hook">
            <Prac02 />
          </Card>
          <Card title="prac 03: tasks with extracted tasksReducer">
            <Prac03 />
          </Card>
          <Card title="prac 04: tasks with extracted tasksReducer - by useImmerReducer">
            <Prac04 />
          </Card>
          <Card title="task 01: dispatch actions from event handlers">
            <Task01 />
          </Card>
          <Card title="task 02: clear the input on sending a message">
            <Task02 />
          </Card>
          <Card title="task 02: clear the input on sending a message, variant 2">
            <Task02V2 />
          </Card>
          <Card title="task 03: restore input values when switching between tabs">
            <Task03 />
          </Card>
          <Card title="task 04: implement useReducer from scratch">
            <Task04 />
          </Card>
          <Card title="prac 05: context: an alternative to passing props">
            <Prac05 />
          </Card>
          <Card title="prac 06: multiple headings">
            <Prac06 />
          </Card>
          <Card title="prac 07: craating a context">
            <Prac07 />
          </Card>
          <Card title="prac 08: using and providing context from the same component">
            <Prac08 />
          </Card>
          <Card title="prac 09: context pass throgh intermediate components">
            <Prac09 />
          </Card>
          <Card title="task 05: replace prop drilling with context">
            <Task05 />
          </Card>
          <Card title="prac 10: combining a reducer with context - init">
            <Prac10 />
          </Card>
          <Card title="prac 11: combining a reducer with context - processing">
            <Prac11 />
          </Card>
          {/* <Card title="prac 12: resetting a component in diffrent positions - option 1">
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
