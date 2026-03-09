import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { managingStateP3 } from 'tasks';

const ManagingStatePageP3 = () => {
  const {
    tasks,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Prac09,
    Prac10,
    Prac11,
    Task05,
  } = managingStateP3;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part iii</H>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
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
        </Grid>
      </Container>
    </Main>
  );
};

export { ManagingStatePageP3 };
