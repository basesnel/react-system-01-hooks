import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
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
        <Paragraph>Array in state of React-component case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="adding to an array">
            <ArrayPractFirst />
          </Card>
          <Card title="removing from an array">
            <ArrayPractSecond />
          </Card>
          <Card title="transforming an array">
            <ArrayPractThird />
          </Card>
          <Card title="replacing items in an array">
            <ArrayPractFourth />
          </Card>
          <Card title="inserting into an array">
            <ArrayPractFifth />
          </Card>
          <Card title="making other changes to an array">
            <ArrayPractSixth />
          </Card>
          <Card title="updating objects inside arrays">
            <ArrayPractSeventh />
          </Card>
          <Card title="write concise update logic with immer">
            <ArrayPractEighth />
          </Card>
          <Card title="update an item in the shopping cart">
            <ArrayTaskFirst />
          </Card>
          <Card title="remove an item in the shopping cart">
            <ArrayTaskSecond />
          </Card>
          <Card title="fix the mutations using non-mutative methods">
            <ArrayTaskThird />
          </Card>
          <Card title="fix the mutations using immer">
            <ArrayTaskFourth />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
