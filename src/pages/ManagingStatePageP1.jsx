import { Main, Container, P, Grid, Card2, H } from 'components';

import { managingStateP1 } from 'tasks';

const ManagingStatePageP1 = () => {
  const { tasks } = managingStateP1;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part i</H>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
        </Grid>
      </Container>
    </Main>
  );
};

export { ManagingStatePageP1 };
