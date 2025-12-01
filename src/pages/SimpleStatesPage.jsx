import { Container, Heading, P, Grid, Card } from 'components';

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
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          examples of simple states
        </Heading>
        <P>Counter hook case.</P>
      </Container>
      <Container>
        <Grid>
          <Card title="prac01: counters with own state">
            <Prac01 />
          </Card>
          <Card title="prac02: counter with general state">
            <Prac02 />
          </Card>
          <Card title="prac03: counter a and counter b">
            <Prac03 />
          </Card>
          <Card title="prac04: counter with reducer">
            <Prac04 />
          </Card>
          <Card title="prac05: update the same counter multiple times before the next render">
            <Prac05 />
          </Card>
          <Card title="prac06: update state after replacing it">
            <Prac06 />
          </Card>
          <Card title="prac07: replace state after updating it">
            <Prac07 />
          </Card>
          <Card title="prac08: passing the initializer function">
            <Prac08 />
          </Card>
          <Card title="prac09: passing the initial state directly">
            <Prac09 />
          </Card>
          <Card title="prac10: resetting state with a key">
            <Prac10 />
          </Card>
          <Card title="prac11: storing information from previous renders">
            <Prac11 />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};

export { SimpleStatesPage };
