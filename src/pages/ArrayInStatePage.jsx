import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Grid from 'components/Grid';
import Card from 'components/Card';
import ArrayPractFirst from '../tasks/ArrayPractFirst';
import ArrayPractSecond from 'tasks/ArrayPractSecond';
import ArrayPractThird from 'tasks/ArrayPractThird';
import ArrayPractFourth from 'tasks/ArrayPractFourth';

export const ArrayInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Array in state" />
        <Text>Array in state of React-component case.</Text>
      </Container>
      <Container>
        <Grid>
          <Card>
            <Title level={2} caption="Array: first case" />
            <ArrayPractFirst />
          </Card>
          <Card>
            <Title level={2} caption="Array: second case" />
            <ArrayPractSecond />
          </Card>
          <Card>
            <Title level={2} caption="Array: third case" />
            <ArrayPractThird />
          </Card>
          <Card>
            <Title level={2} caption="Array: fourth case" />
            <ArrayPractFourth />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
