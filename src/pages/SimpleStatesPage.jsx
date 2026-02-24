import { Main, Container, H, P, Grid, Card2 } from 'components';

import { simpleStates } from 'tasks';

const SimpleStatesPage = () => {
  const { tasks, Prac07, Prac08, Prac09, Prac10, Prac11 } = simpleStates;

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
          <Card2 title={<H level={2}>prac07: replace state after updating</H>}>
            <Prac07 />
          </Card2>
          <Card2
            title={<H level={2}>prac08: passing the initializer function</H>}
          >
            <Prac08 />
          </Card2>
          <Card2
            title={<H level={2}>prac09: passing the initial state directly</H>}
          >
            <Prac09 />
          </Card2>
          <Card2 title={<H level={2}>prac10: resetting state with a key</H>}>
            <Prac10 />
          </Card2>
          <Card2
            title={
              <H level={2}>prac11: storing information from previous renders</H>
            }
          >
            <Prac11 />
          </Card2>
        </Grid>
      </Container>
    </Main>
  );
};

export { SimpleStatesPage };
