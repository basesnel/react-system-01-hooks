import { Main, Container, P, Grid, Card, H } from 'components';

import { managingStateP3 } from 'tasks';

const ManagingStatePageP3 = () => {
  const { tasks } = managingStateP3;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part iii</H>
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

export { ManagingStatePageP3 };
