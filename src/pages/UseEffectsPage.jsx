// import { useEffect, useState } from 'react';

import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
// import FlexBox from 'components/FlexBox';
// import DecoratedButton from 'components/DecoratedButton';
// import Caption from 'components/Caption';
import Grid from 'components/Grid';
import Card from 'components/Card';
import ChatServer from 'tasks/useEffectsCases/ChatServer';
import ListeningGlobalEvent from 'tasks/useEffectsCases/ListeningGlobalEvent';
import TriggeringAnimation from 'tasks/useEffectsCases/TriggeringAnimation';
import ControllingModalDialog from 'tasks/useEffectsCases/ContollingModalDialog/ControllingModalDialog';

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
        </Grid>
      </Container>
    </main>
  );
};
