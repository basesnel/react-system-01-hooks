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
import AddCleanup from 'tasks/EscapeHatches/AddCleanup';
import PutAllTogether from 'tasks/EscapeHatches/PutAllTogether';
import FocusOnMount from 'tasks/EscapeHatches/FocusOnMount';
import FocusOnMountCond from 'tasks/EscapeHatches/FocusOnMountCond';
import FixAnInterval from 'tasks/EscapeHatches/FixAnInterval';
import FixFetchingInEffect from 'tasks/EscapeHatches/FixFetchingInEffect';

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
          <Card title="pract 01: referencing values with refs">
            <RefValuesByRef />
          </Card>
          <Card title="pract 02: starting a stopwatch">
            <StopWatch />
          </Card>
          <Card title="pract 03: building a stopwatch">
            <BuildingWatch />
          </Card>
          <Card title="pract 04: difference between refs and state">
            <CounterRef />
          </Card>
          <Card title="task 01: fix a broken chat input">
            <FixBrockenInput />
          </Card>
          <Card title="task 02: fix a component failed to re-render">
            <FixFailingRerender />
          </Card>
          <Card title="task 03: fix debouncing">
            <FixDebouncing />
          </Card>
          <Card title="task 04: read the latest state">
            <ReadLatestState />
          </Card>
          <Card title="pract 05: manipulating the dom with refs">
            <ManipulatingDOM />
          </Card>
          <Card title="pract 06: scrolling to an element">
            <CatFriends />
          </Card>
          <Card title="pract 07: how to manage a list of refs using a ref callback">
            <RefCallBack />
          </Card>
          <Card title="pract 08: accessing another component's dom node">
            <AccessingComponent />
          </Card>
          <Card title="pract 09: flushing state updates synchronously with flushsync">
            <FlushingStateUpdates />
          </Card>
          <Card title="pract 10: best practices for dom manipulation with refs">
            <ManipulationDom />
          </Card>
          <Card title="task 05: play and pause the video">
            <VideoPlayer />
          </Card>
          <Card title="task 06: focus the search field">
            <FocusingSearch />
          </Card>
          <Card title="task 07: scrolling an image carousel">
            <CatFriendsTask />
          </Card>
          <Card title="task 08: focusing the search field  with separate components">
            <ForwardSepComp />
          </Card>
          <Card title="task: declare an effect">
            <DeclareAnEffect />
          </Card>
          <Card title="specify the effect dependancies">
            <EffectDependancies />
          </Card>
          <Card title="add cleanup if needed">
            <AddCleanup />
          </Card>
          <Card title="putting it all together">
            <PutAllTogether />
          </Card>
          <Card title="focus on field on mount">
            <FocusOnMount />
          </Card>
          <Card title="focus a field conditionally">
            <FocusOnMountCond />
          </Card>
          <Card title="fix an interval that fires twice">
            <FixAnInterval />
          </Card>
          <Card title="fix fetching inside an effect">
            <FixFetchingInEffect />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
