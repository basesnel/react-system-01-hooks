import { Main, Container, P, Grid, Card2, H } from 'components';

import { useEffectsCases } from 'tasks';

const UseEffectsPage = () => {
  const {
    tasks,
    Prac09,
    Prac10,
    Prac11,
    Prac12,
    Prac13,
    Prac14,
    Prac15,
    Prac16,
  } = useEffectsCases;

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
            title={<H level={2}>prac 09: controlling a non-react widget</H>}
          >
            <Prac09 />
          </Card2>
          <Card2 title={<H level={2}>prac 10: fetching data with effects</H>}>
            <Prac10 />
          </Card2>
          <Card2 title={<H level={2}>prac 11: passing a dependancy array</H>}>
            <Prac11 />
          </Card2>
          <Card2
            title={<H level={2}>prac 12: passing an empty dependancy array</H>}
          >
            <Prac12 />
          </Card2>
          <Card2
            title={<H level={2}>prac 13: passing no dependancy array at all</H>}
          >
            <Prac13 />
          </Card2>
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
