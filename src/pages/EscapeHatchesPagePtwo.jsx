import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import TformDataWithoutEffect from 'tasks/EscapeHatches/TformDataWithoutEffect';
import CacheCalcWithEffect from 'tasks/EscapeHatches/CacheCalcWithEffect';
import ContactManager from 'tasks/EscapeHatchesPartII/ContactManager';
import SubmitWithoutEffect from 'tasks/EscapeHatchesPartII/SubmitWithoutEffect';

export const EscapeHatchesPagePtwo = () => {
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
          <Card title="escape hatches ii - task 1: transform data without effects">
            <TformDataWithoutEffect />
          </Card>
          <Card title="escape hatches ii - task 2: cache a calculation without effects">
            <CacheCalcWithEffect />
          </Card>
          <Card title="escape hatches ii - task 3: reset state without effects">
            <ContactManager />
          </Card>
          <Card title="escape hatches ii - task 3: submit a form without effects">
            <SubmitWithoutEffect />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
