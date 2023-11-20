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
import FixDebouncing from 'tasks/EscapeHatches/FixDebouncing';
import ReadLatestState from 'tasks/EscapeHatches/ReadLatestState';
import CatFriends from 'tasks/EscapeHatches/CatFriends';
import RefCallBack from 'tasks/EscapeHatches/RefCallBack';

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
          <Card title="fix debouncing">
            <FixDebouncing />
          </Card>
          <Card title="read the latest state">
            <ReadLatestState />
          </Card>
          <Card title="manipulating the dom with refs">
            <ManipulatingDOM />
          </Card>
          <Card title="scrolling to an element">
            <CatFriends />
          </Card>
          <Card title="how to manage a list of refs using a ref callback">
            <RefCallBack />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
