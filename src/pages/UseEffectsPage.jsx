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
            <Text>Second case</Text>
          </Card>
          <Card title="triggering an animation">
            <Text>Third case</Text>
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
