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
        <Title level={1} caption="array in state" />
        <Text>Array in state of React-component case.</Text>
      </Container>
      <Container>
        <Grid>
          <Card title={<Title level={2} caption="adding to an array" />}>
            <ArrayPractFirst />
          </Card>
          <Card title={<Title level={2} caption="removing from an array" />}>
            <ArrayPractSecond />
          </Card>
          <Card title={<Title level={2} caption="transforming an array" />}>
            <ArrayPractThird />
          </Card>
          <Card
            title={<Title level={2} caption="replacing items in an array" />}
          >
            <ArrayPractFourth />
          </Card>
          <Card title={<Title level={2} caption="inserting into an array" />}>
            <ArrayPractFifth />
          </Card>
          <Card
            title={
              <Title level={2} caption="making other changes to an array" />
            }
          >
            <ArrayPractSixth />
          </Card>
          <Card
            title={<Title level={2} caption="updating objects inside arrays" />}
          >
            <ArrayPractSeventh />
          </Card>
          <Card
            title={
              <Title
                level={2}
                caption="write concise update logic with immer"
              />
            }
          >
            <ArrayPractEighth />
          </Card>
          <Card
            title={
              <Title level={2} caption="update an item in the shopping cart" />
            }
          >
            <ArrayTaskFirst />
          </Card>
          <Card
            title={
              <Title level={2} caption="remove an item in the shopping cart" />
            }
          >
            <ArrayTaskSecond />
          </Card>
          <Card
            title={
              <Title
                level={2}
                caption="fix the mutations using non-mutative methods"
              />
            }
          >
            <ArrayTaskThird />
          </Card>
          <Card
            title={<Title level={2} caption="fix the mutations using immer" />}
          >
            <ArrayTaskFourth />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
