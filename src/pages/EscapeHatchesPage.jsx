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
import AccessingComponent from 'tasks/EscapeHatches/AccessingComponent';
import FlushingStateUpdates from 'tasks/EscapeHatches/FlushingStateUpdates';
import ManipulationDom from 'tasks/EscapeHatches/ManipulationDom';
import VideoPlayer from 'tasks/EscapeHatches/VideoPlayer';
import FocusingSearch from 'tasks/EscapeHatches/FocusingSearch';
import CatFriendsTask from 'tasks/EscapeHatches/CatFriendsTask';
import ForwardSepComp from 'tasks/EscapeHatches/ForwardSepComp';
import DeclareAnEffect from 'tasks/EscapeHatches/DeclareAnEffect';
import EffectDependancies from 'tasks/EscapeHatches/EffectDependancies';

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
          <Card title="accessing another component's dom node">
            <AccessingComponent />
          </Card>
          <Card title="flushing state updates synchronously with flushsync">
            <FlushingStateUpdates />
          </Card>
          <Card title="best practices for dom manipulation with refs">
            <ManipulationDom />
          </Card>
          <Card title="play and pause the video">
            <VideoPlayer />
          </Card>
          <Card title="focus the search field">
            <FocusingSearch />
          </Card>
          <Card title="scrolling an image carousel">
            <CatFriendsTask />
          </Card>
          <Card title="focusing the search field  with separate components">
            <ForwardSepComp />
          </Card>
          <Card title="task: declare an effect">
            <DeclareAnEffect />
          </Card>
          <Card title="specify the effect dependancies">
            <EffectDependancies />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
