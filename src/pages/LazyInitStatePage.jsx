import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Grid from 'components/Grid';
import Card from 'components/Card';
import LazyExample from 'tasks/LazyInitState/LazyExample';
import NoLazyExample from 'tasks/LazyInitState/NoLazyExample';

export const LazyInitStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="avoiding recreating the initial state" />
        <Text>List of lazy initial state examples</Text>
      </Container>
      <Container>
        <Grid>
          <Card title="Passing the initializer function">
            <LazyExample />
          </Card>
          <Card title="Passing the initial state directly">
            <NoLazyExample />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
