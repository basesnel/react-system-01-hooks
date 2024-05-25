import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import { Task01 } from 'tasks/EscapeHatchesP02';
import { Task02 } from 'tasks/EscapeHatchesP02';
import { Task03 } from 'tasks/EscapeHatchesP02';
import { Task04 } from 'tasks/EscapeHatchesP02';

const EscapeHatchesPageP2 = () => {
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
            <Task01 />
          </Card>
          <Card title="task 02: cache a calculation without effects">
            <Task02 />
          </Card>
          <Card title="task 03: reset state without effects">
            <Task03 />
          </Card>
          <Card title="task 04: submit a form without effects">
            <Task04 />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};

export { EscapeHatchesPageP2 };
