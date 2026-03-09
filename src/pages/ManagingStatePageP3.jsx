import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { managingStateP3 } from 'tasks';

const ManagingStatePageP3 = () => {
  const { tasks, Prac10, Prac11 } = managingStateP3;

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
