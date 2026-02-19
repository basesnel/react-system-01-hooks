import { Main, Container, H, P, Grid, Card2 } from 'components';

import { simpleStates } from 'tasks';

const SimpleStatesPage = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
    Prac04,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Prac09,
    Prac10,
    Prac11,
  } = simpleStates;

  return (
    <Main>
      <Container>
        <H level={1}>examples of simple states</H>
        <P>Counter hook case.</P>
      </Container>
      <Container>
        <Grid>
          <Card2 title={<H level={2}>prac01: counters with own state</H>}>
            <Prac01 />
          </Card2>
          <Card2 title={<H level={2}>prac02: counter with general state</H>}>
            <Prac02 />
          </Card2>
          <Card2 title={<H level={2}>prac03: counter a and counter b</H>}>
            <Prac03 />
          </Card2>
          <Card2 title={<H level={2}>prac04: counter with reducer</H>}>
            <Prac04 />
          </Card2>
          <Card2 title={<H level={2}>prac05: multi-updating to next render</H>}>
            <Prac05 />
          </Card2>
          <Card2 title={<H level={2}>prac06: update state after replacing</H>}>
            <Prac06 />
          </Card2>
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
