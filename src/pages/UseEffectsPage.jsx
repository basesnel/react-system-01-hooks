// import { useEffect, useState } from 'react';

import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
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

export const UseEffectsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="useeffect cases" />
        <Text>useEffect hook cases.</Text>
      </Container>
      <Container>
        <Grid>
          <Card title="connecting to chat server">
            <ChatServer />
          </Card>
          <Card title="listening to global browser event">
            <ListeningGlobalEvent />
          </Card>
          <Card title="triggering an animation">
            <TriggeringAnimation />
          </Card>
          <Card title="controlling a modal dialog">
            <ControllingModalDialog />
          </Card>
          <Card title="tracking element visibility">
            <TrackingElementVisibility />
          </Card>
          <Card title="custom usechatroom hook">
            <CustomUseChatRoom />
          </Card>
          <Card title="custom usecwindowlistener hook">
            <CustomUseWindowListener />
          </Card>
          <Card title="custom useintersectionobserver hook">
            <CustomTrackingVisibility />
          </Card>
          <Card title="controlling  a non-react widget">
            <MapWidget />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
