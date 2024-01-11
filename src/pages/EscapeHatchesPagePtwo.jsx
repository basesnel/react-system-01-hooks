import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import TformDataWithoutEffect from 'tasks/EscapeHatches/TformDataWithoutEffect';

export const EscapeHatchesPagePtwo = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="escape hatches: part 2" />
        <Paragraph>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="task 1: transform data without effect">
            <TformDataWithoutEffect />
          </Card>
          <Card title="task 2">Content two</Card>
          <Card title="task 3">Content three</Card>
        </Grid>
      </Container>
    </main>
  );
};
