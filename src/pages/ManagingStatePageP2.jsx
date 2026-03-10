import { Main, Container, P, Grid, Card, H } from 'components';

import { managingStateP2 } from 'tasks';

const ManagingStatePageP2 = () => {
  const { tasks } = managingStateP2;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part ii</H>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card key={i} title={title}>
              {task}
            </Card>
          ))}
        </Grid>
      </Container>
    </Main>
  );
};

export { ManagingStatePageP2 };
