import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { escapeHatchesP02 } from 'tasks';

const EscapeHatchesPageP2 = () => {
  const {
    Task01,
    Task02,
    Task03,
    Task04,
    Prac01,
    Prac02,
    Prac03,
    Prac04,
    Prac05,
    Task05,
    Task06,
    Task07,
    Task08,
    Task09,
    Task10,
    Prac06,
    Prac07,
    Task11,
    Prac08,
    Prac09,
    Prac10,
    Prac11,
    Prac12,
    Prac13,
    Task12,
    Task13,
    Task14,
  } = escapeHatchesP02;

  return (
    <Main>
      <Container>
        <H level={1}>escape hatches - part ii</H>
        <P>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </P>
      </Container>
      <Container>
        <Grid>
          <Card2
            title={<H level={2}>task 01: transform data without effects</H>}
          >
            <Task01 />
          </Card2>
          <Card2
            title={
              <H level={2}>task 02: cache a calculation without effects</H>
            }
          >
            <Task02 />
          </Card2>
          <Card2 title={<H level={2}>task 03: reset state without effects</H>}>
            <Task03 />
          </Card2>
          <Card2
            title={<H level={2}>task 04: submit a form without effects</H>}
          >
            <Task04 />
          </Card2>
          <Card2 title={<H level={2}>prac 01: re-synchonize effect</H>}>
            <Prac01 />
          </Card2>
          <Card2 title={<H level={2}>prac 02: effects to reactive values</H>}>
            <Prac02 />
          </Card2>
          <Card2 title={<H level={2}>prac 03: effects to reactive values</H>}>
            <Prac03 />
          </Card2>
          <Card title="prac 04: react verifies values as dependancy">
            <Prac04 />
          </Card>
          <Card title="prac 05: variables is reactive">
            <Prac05 />
          </Card>
          <Card title="task 05: fix connecting on every keystroke">
            <Task05 />
          </Card>
          <Card title="task 06: switch synchronisztion on and off">
            <Task06 />
          </Card>
          <Card title="task 07: investigate a state value bug">
            <Task07 />
          </Card>
          <Card title="task 08: fix a connection switch">
            <Task08 />
          </Card>
          <Card title="task 09: populate a chain of selected boxes">
            <Task09 />
          </Card>
          <Card title="task 10: populate a chain of selected boxes (custom hook)">
            <Task10 />
          </Card>
          <Card title="prac 06: effects run whenever sync is needed">
            <Prac06 />
          </Card>
          <Card title="prac 07: extracting non-reactive logic out of Effects">
            <Prac07 />
          </Card>
          <Card title="task 11: fix variable that doesn't update">
            <Task11 />
          </Card>
          <Card title="prac 08: experiment with effect dependancy">
            <Prac08 />
          </Card>
          <Card title="prac 09: does some reactive value change unintentionally?">
            <Prac09 />
          </Card>
          <Card title="prac 10: move static object outside component">
            <Prac10 />
          </Card>
          <Card title="prac 11: object works as function">
            <Prac11 />
          </Card>
          <Card title="prac 12: move dynamic objecct inside effect">
            <Prac12 />
          </Card>
          <Card title="prac 13: move dynamic objecct inside effect (by function)">
            <Prac13 />
          </Card>
          <Card title="task 12: fix a resetting interval">
            <Task12 />
          </Card>
          <Card title="task 13: fix a reconnecting chat">
            <Task13 />
          </Card>
          <Card title="task 14: fix a reconnecting chat II variant">
            <Task14 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { EscapeHatchesPageP2 };
