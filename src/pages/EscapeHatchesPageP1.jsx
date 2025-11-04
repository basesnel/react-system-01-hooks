import { Container, Title, P, Grid, Card } from 'components';

import { escapeHatchesP01 } from 'tasks';

const EscapeHatchesPageP1 = () => {
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
    Prac12,
    Prac13,
    Prac14,
    Task01,
    Task02,
    Task03,
    Task04,
    Task05,
    Task06,
    Task07,
    Task08,
    Task09,
    Task10,
    Task11,
    Task12,
  } = escapeHatchesP01;

  return (
    <main>
      <Container>
        <Title level={1} caption="escape hatches - part i" />
        <P>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </P>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: referencing values with refs">
            <Prac01 />
          </Card>
          <Card title="prac 02: starting a stopwatch">
            <Prac02 />
          </Card>
          <Card title="prac 03: building a stopwatch">
            <Prac03 />
          </Card>
          <Card title="prac 04: difference between refs and state">
            <Prac04 />
          </Card>
          <Card title="task 01: fix a broken chat input">
            <Task01 />
          </Card>
          <Card title="task 02: fix a component failed to re-render">
            <Task02 />
          </Card>
          <Card title="task 03: fix debouncing">
            <Task03 />
          </Card>
          <Card title="task 04: read the latest state">
            <Task04 />
          </Card>
          <Card title="prac 05: manipulating the dom with refs">
            <Prac05 />
          </Card>
          <Card title="prac 06: scrolling to an element">
            <Prac06 />
          </Card>
          <Card title="prac 07: how to manage a list of refs using a ref callback">
            <Prac07 />
          </Card>
          <Card title="prac 08: accessing another component's dom node">
            <Prac08 />
          </Card>
          <Card title="prac 09: flushing state updates synchronously with flushsync">
            <Prac09 />
          </Card>
          <Card title="prac 10: best pracices for dom manipulation with refs">
            <Prac10 />
          </Card>
          <Card title="task 05: play and pause the video">
            <Task05 />
          </Card>
          <Card title="task 06: focus the search field">
            <Task06 />
          </Card>
          <Card title="task 07: scrolling an image carousel">
            <Task07 />
          </Card>
          <Card title="task 08: focusing the search field  with separate components">
            <Task08 />
          </Card>
          <Card title="prac 11: declare an effect">
            <Prac11 />
          </Card>
          <Card title="prac 12: specify the effect dependancies">
            <Prac12 />
          </Card>
          <Card title="prac 13: add cleanup if needed">
            <Prac13 />
          </Card>
          <Card title="prac 14: putting it all together">
            <Prac14 />
          </Card>
          <Card title="task 09: focus on field on mount">
            <Task09 />
          </Card>
          <Card title="task 10: focus a field conditionally">
            <Task10 />
          </Card>
          <Card title="task 11: fix an interval that fires twice">
            <Task11 />
          </Card>
          <Card title="task 12: fix fetching inside an effect">
            <Task12 />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};

export { EscapeHatchesPageP1 };
