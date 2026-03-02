import { Main, Container, P, Grid, Card2, H } from 'components';

import { escapeHatchesP01 } from 'tasks';

const EscapeHatchesPageP1 = () => {
  const { tasks } = escapeHatchesP01;

  return (
    <Main>
      <Container>
        <H level={1}>escape hatches - part i</H>
        <P>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </P>
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

export { EscapeHatchesPageP1 };
