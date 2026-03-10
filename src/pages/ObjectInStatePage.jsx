import { Main, Container, H, P, Grid, Card } from 'components';

import { objectsInState } from 'tasks';

const ObjectInStatePage = () => {
  const { tasks } = objectsInState;

  return (
    <Main>
      <Container>
        <H level={1}>object in state</H>
        <P>Object in state of React-component case.</P>
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

export { ObjectInStatePage };
