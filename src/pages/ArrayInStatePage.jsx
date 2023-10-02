import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Grid from 'components/Grid';
import Card from 'components/Card';
import ArrayPractFirst from 'tasks/arrays/ArrayPractFirst';
import ArrayPractSecond from 'tasks/arrays/ArrayPractSecond';
import ArrayPractThird from 'tasks/arrays/ArrayPractThird';
import ArrayPractFourth from 'tasks/arrays/ArrayPractFourth';
import ArrayPractFifth from 'tasks/arrays/ArrayPractFifth';
import ArrayPractSixth from 'tasks/arrays/ArrayPractSixth';
import ArrayPractSeventh from 'tasks/arrays/ArrayPractSeventh';
import ArrayPractEighth from 'tasks/arrays/ArrayPractEighth';
import ArrayTaskSecond from 'tasks/arrays/ArrayTaskSecond';
import ArrayTaskFirst from 'tasks/arrays/ArrayTaskFirst';
import ArrayTaskThird from 'tasks/arrays/ArrayTaskThird';
import ArrayTaskFourth from 'tasks/arrays/ArrayTaskFourth';

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
          <Card>
            <Title level={2} caption="Array: fifth case" />
            <ArrayPractFifth />
          </Card>
          <Card>
            <Title level={2} caption="Array: sixth case" />
            <ArrayPractSixth />
          </Card>
          <Card>
            <Title level={2} caption="Array: seventh case" />
            <ArrayPractSeventh />
          </Card>
          <Card>
            <Title level={2} caption="Array: eighth case" />
            <ArrayPractEighth />
          </Card>
          <Card>
            <Title level={2} caption="Array: first task" />
            <ArrayTaskFirst />
          </Card>
          <Card>
            <Title level={2} caption="Array: second task" />
            <ArrayTaskSecond />
          </Card>
          <Card>
            <Title level={2} caption="Array: third task" />
            <ArrayTaskThird />
          </Card>
          <Card>
            <Title level={2} caption="Array: fourth task" />
            <ArrayTaskFourth />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
