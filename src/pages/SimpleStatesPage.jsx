import { Main, Container, H, P, Grid, Card2 } from 'components';

import { simpleStates } from 'tasks';

const SimpleStatesPage = () => {
  const { tasks } = simpleStates;

  return (
    <Main>
      <Container>
        <H level={1}>examples of simple states</H>
        <P>Counter hook case.</P>
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

export { SimpleStatesPage };
