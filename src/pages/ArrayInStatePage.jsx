import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import Prac01 from 'tasks/arrays/Prac01';
import Prac02 from 'tasks/arrays/Prac02';
import Prac03 from 'tasks/arrays/Prac03';
import Prac04 from 'tasks/arrays/Prac04';
// import ArrayPractFifth from 'tasks/arrays/ArrayPractFifth';
// import ArrayPractSixth from 'tasks/arrays/ArrayPractSixth';
// import ArrayPractSeventh from 'tasks/arrays/ArrayPractSeventh';
// import ArrayPractEighth from 'tasks/arrays/ArrayPractEighth';
// import ArrayTaskSecond from 'tasks/arrays/ArrayTaskSecond';
// import ArrayTaskFirst from 'tasks/arrays/ArrayTaskFirst';
// import ArrayTaskThird from 'tasks/arrays/ArrayTaskThird';
// import ArrayTaskFourth from 'tasks/arrays/ArrayTaskFourth';

export const ArrayInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="array in state" />
        <Paragraph>Array in state of React-component case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: adding to an array">
            <Prac01 />
          </Card>
          <Card title="prac 02: removing from an array">
            <Prac02 />
          </Card>
          <Card title="prac 03: transforming an array">
            <Prac03 />
          </Card>
          <Card title="prac 04: replacing items in an array">
            <Prac04 />
          </Card>
          {/* <Card title="prac 05: inserting into an array">
            <ArrayPractFifth />
          </Card>
          <Card title="prac 06: making other changes to an array">
            <ArrayPractSixth />
          </Card>
          <Card title="prac 07: updating objects inside arrays">
            <ArrayPractSeventh />
          </Card>
          <Card title="prac 08: write concise update logic with immer">
            <ArrayPractEighth />
          </Card>
          <Card title="task 01: update an item in the shopping cart">
            <ArrayTaskFirst />
          </Card>
          <Card title="task 02: remove an item in the shopping cart">
            <ArrayTaskSecond />
          </Card>
          <Card title="task 03: fix the mutations using non-mutative methods">
            <ArrayTaskThird />
          </Card>
          <Card title="task 04: fix the mutations using immer">
            <ArrayTaskFourth />
          </Card> */}
        </Grid>
      </Container>
    </main>
  );
};
