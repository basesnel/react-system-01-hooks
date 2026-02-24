import { Main, Container, H, P, Grid, Card2 } from 'components';

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
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
        </Grid>
      </Container>
    </Main>
  );
};

export { ObjectInStatePage };
