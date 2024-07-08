import { Container, Title, Paragraph, Grid, Card } from 'components';

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
  } = escapeHatchesP02;

  return (
    <main>
      <Container>
        <Title level={1} caption="escape hatches ii" />
        <Paragraph>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="task 01: transform data without effects">
            <Task01 />
          </Card>
          <Card title="task 02: cache a calculation without effects">
            <Task02 />
          </Card>
          <Card title="task 03: reset state without effects">
            <Task03 />
          </Card>
          <Card title="task 04: submit a form without effects">
            <Task04 />
          </Card>
          <Card title="prac 01: re-synchonize effect">
            <Prac01 />
          </Card>
          <Card title="prac 02: effects to reactive values">
            <Prac02 />
          </Card>
          <Card title="prac 03: effects to reactive values">
            <Prac03 />
          </Card>
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
        </Grid>
      </Container>
    </main>
  );
};

export { EscapeHatchesPageP2 };
