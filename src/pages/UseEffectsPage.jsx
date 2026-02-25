import { Main, Container, P, Grid, Card2, H } from 'components';

import { useEffectsCases } from 'tasks';

const UseEffectsPage = () => {
  const { tasks, Prac14, Prac15, Prac16 } = useEffectsCases;

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
          <Card2
            title={
              <H level={2}>
                prac 14: updating state based on previous state from an effect
              </H>
            }
          >
            <Prac14 />
          </Card2>
          <Card2
            title={
              <H level={2}>prac 15: removing unnecessary object dependancies</H>
            }
          >
            <Prac15 />
          </Card2>
          <Card2
            title={
              <H level={2}>
                prac 16: removing unnecessary function dependancies
              </H>
            }
          >
            <Prac16 />
          </Card2>
        </Grid>
      </Container>
    </Main>
  );
};

export { UseEffectsPage };
