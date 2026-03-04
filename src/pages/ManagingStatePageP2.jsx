import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { managingStateP2 } from 'tasks';

const ManagingStatePageP2 = () => {
  const {
    tasks,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Prac09,
    Prac10,
    Prac11,
    Prac12,
    Prac13,
    Prac14,
    Prac15,
    Task03,
    Task04,
    Task05,
    Task06,
    Task07,
  } = managingStateP2;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part ii</H>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
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
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { ManagingStatePageP2 };
