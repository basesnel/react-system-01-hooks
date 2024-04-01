import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';
import ChatServer from 'tasks/useEffectsCases/ChatServer';
import ListeningGlobalEvent from 'tasks/useEffectsCases/ListeningGlobalEvent';
import TriggeringAnimation from 'tasks/useEffectsCases/TriggeringAnimation';
import ControllingModalDialog from 'tasks/useEffectsCases/ContollingModalDialog/ControllingModalDialog';
import TrackingElementVisibility from 'tasks/useEffectsCases/TrackingElementVisibility';
import CustomUseChatRoom from 'tasks/useEffectsCases/CustomUseChatRoom';
import CustomUseWindowListener from 'tasks/useEffectsCases/CustomUseWindowListener';
import CustomTrackingVisibility from 'tasks/useEffectsCases/CustomTrackingVisibility';
import MapWidget from 'tasks/useEffectsCases/MapWidget';
import FetchingData from 'tasks/useEffectsCases/FetchingData';
import PassingDepArray from 'tasks/useEffectsCases/PassingDepArray';
import PassingEmptyDepArray from 'tasks/useEffectsCases/PassingEmptyDepArray';
import PassingNoDepArray from 'tasks/useEffectsCases/PassingNoDepArray/PassingNoDepArray';
import UpdatingBasedOnPrev from 'tasks/useEffectsCases/UpdatingBasedOnPrev';
import RemovingUnryObjectDep from 'tasks/useEffectsCases/RemovingUnryObjectDep';
import RemovingUnryFuncDep from 'tasks/useEffectsCases/RemovingUnryFuncDep';

export const UseEffectsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="useeffect cases" />
        <Paragraph>useEffect hook cases.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: connecting to chat server">
            <ChatServer />
          </Card>
          <Card title="prac 02: listening to global browser event">
            <ListeningGlobalEvent />
          </Card>
          <Card title="prac 03: triggering an animation">
            <TriggeringAnimation />
          </Card>
          <Card title="prac 04: controlling a modal dialog">
            <ControllingModalDialog />
          </Card>
          <Card title="prac 05: tracking element visibility">
            <TrackingElementVisibility />
          </Card>
          <Card title="prac 06: custom usechatroom hook">
            <CustomUseChatRoom />
          </Card>
          <Card title="prac 07: custom usecwindowlistener hook">
            <CustomUseWindowListener />
          </Card>
          <Card title="prac 08: custom useintersectionobserver hook">
            <CustomTrackingVisibility />
          </Card>
          <Card title="prac 09: controlling  a non-react widget">
            <MapWidget />
          </Card>
          <Card title="prac 10: fetching data with effects">
            <FetchingData />
          </Card>
          <Card title="prac 11: passing a dependancy array">
            <PassingDepArray />
          </Card>
          <Card title="prac 12: passing an empty dependancy array">
            <PassingEmptyDepArray />
          </Card>
          <Card title="prac 13: passing no dependancy array at all">
            <PassingNoDepArray />
          </Card>
          <Card title="prac 14: updating state based on previous state from an effect">
            <UpdatingBasedOnPrev />
          </Card>
          <Card title="prac 15: removing unnecessary object dependancies">
            <RemovingUnryObjectDep />
          </Card>
          <Card title="prac 16: removing unnecessary function dependancies">
            <RemovingUnryFuncDep />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
