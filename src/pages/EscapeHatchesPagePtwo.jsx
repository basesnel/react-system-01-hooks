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
          <Card title="task 01: transform data without effects">
            <TformDataWithoutEffect />
          </Card>
          <Card title="task 02: cache a calculation without effects">
            <CacheCalcWithEffect />
          </Card>
          <Card title="task 03: reset state without effects">
            <ContactManager />
          </Card>
          <Card title="task 04: submit a form without effects">
            <SubmitWithoutEffect />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
