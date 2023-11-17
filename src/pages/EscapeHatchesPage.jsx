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
import FixBrockenInput from 'tasks/EscapeHatches/FixBrockenInput';
import FixFailingRerender from 'tasks/EscapeHatches/FixFailingRerender';

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
          <Card title="starting a stopwatch">
            <StopWatch />
          </Card>
          <Card title="building a stopwatch">
            <BuildingWatch />
          </Card>
          <Card title="difference between refs and state">
            <CounterRef />
          </Card>
          <Card title="fix a broken chat input">
            <FixBrockenInput />
          </Card>
          <Card title="fix a component failed to re-render">
            <FixFailingRerender />
          </Card>
          <Card title="manipulating the dom with refs">
            <ManipulatingDOM />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
