import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

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
          <Card title="connecting to chat server">
            <Paragraph>First case</Paragraph>
          </Card>
          <Card title="listening to global browser event">
            <Paragraph>Second case</Paragraph>
          </Card>
          <Card title="triggering an animation">
            <Paragraph>Third case</Paragraph>
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
