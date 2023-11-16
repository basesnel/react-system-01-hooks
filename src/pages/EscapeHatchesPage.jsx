import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';
import RefValuesByRef from 'tasks/EscapeHatches/RefValuesByRef';
import ManipulatingDOM from 'tasks/EscapeHatches/ManipulatingDOM';
import StopWatch from 'tasks/EscapeHatches/StopWatch';
import BuildingWatch from 'tasks/EscapeHatches/BuildingWatch';
import CounterRef from 'tasks/EscapeHatches/CounterRef';

export const EscapeHatchesPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="escape hatches" />
        <Paragraph>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="referencing values with refs">
            <RefValuesByRef />
          </Card>
          <Card title="Starting a stopwatch">
            <StopWatch />
          </Card>
          <Card title="Building a stopwatch">
            <BuildingWatch />
          </Card>
          <Card title="Difference between refs and state">
            <CounterRef />
          </Card>
          <Card title="Manipulating the dom with refs">
            <ManipulatingDOM />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
