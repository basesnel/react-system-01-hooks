import { Main, Container, P, Grid, Card2, H } from 'components';

import { useEffectsCases } from 'tasks';

const UseEffectsPage = () => {
  const { tasks } = useEffectsCases;

  return (
    <Main>
      <Container>
        <H level={1}>useeffect cases</H>
        <P>useEffect hook cases.</P>
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

export { UseEffectsPage };
