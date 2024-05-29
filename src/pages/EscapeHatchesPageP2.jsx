import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';
import { Grid } from 'components';
import { Card } from 'components';

import { escapeHatchesP02 } from 'tasks';

const EscapeHatchesPageP2 = () => {
  const { Task01, Task02, Task03, Task04 } = escapeHatchesP02;

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
