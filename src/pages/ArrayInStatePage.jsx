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
          <Card title={<Title level={2} caption="Adding to an array" />}>
            <ArrayPractFirst />
          </Card>
          <Card title={<Title level={2} caption="Removing from an array" />}>
            <ArrayPractSecond />
          </Card>
          <Card title={<Title level={2} caption="Transforming an array" />}>
            <ArrayPractThird />
          </Card>
          <Card
            title={<Title level={2} caption="Replacing items in an array" />}
          >
            <ArrayPractFourth />
          </Card>
          <Card title={<Title level={2} caption="Inserting into an array" />}>
            <ArrayPractFifth />
          </Card>
          <Card
            title={
              <Title level={2} caption="Making other changes to an array" />
            }
          >
            <ArrayPractSixth />
          </Card>
          <Card
            title={<Title level={2} caption="Updating objects inside arrays" />}
          >
            <ArrayPractSeventh />
          </Card>
          <Card
            title={
              <Title
                level={2}
                caption="Write concise update logic with immer"
              />
            }
          >
            <ArrayPractEighth />
          </Card>
          <Card
            title={
              <Title level={2} caption="Update an item in the shopping cart" />
            }
          >
            <ArrayTaskFirst />
          </Card>
          <Card
            title={
              <Title level={2} caption="Remove an item in the shopping cart" />
            }
          >
            <ArrayTaskSecond />
          </Card>
          <Card
            title={
              <Title
                level={2}
                caption="Fix the mutations using non-mutative methods"
              />
            }
          >
            <ArrayTaskThird />
          </Card>
          <Card
            title={<Title level={2} caption="Fix the mutations using immer" />}
          >
            <ArrayTaskFourth />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
