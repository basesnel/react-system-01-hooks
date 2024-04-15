import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import Prac01 from 'tasks/ArrayInState/Prac01';
import Prac02 from 'tasks/ArrayInState/Prac02';
import Prac03 from 'tasks/ArrayInState/Prac03';
import Prac04 from 'tasks/ArrayInState/Prac04';
import Prac05 from 'tasks/ArrayInState/Prac05';
import Prac06 from 'tasks/ArrayInState/Prac06';
import Prac07 from 'tasks/ArrayInState/Prac07';
import Prac08 from 'tasks/ArrayInState/Prac08';
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
          <Card title="prac 05: inserting into an array">
            <Prac05 />
          </Card>
          <Card title="prac 06: making other changes to an array">
            <Prac06 />
          </Card>
          <Card title="prac 07: updating objects inside arrays">
            <Prac07 />
          </Card>
          <Card title="prac 08: write concise update logic with immer">
            <Prac08 />
          </Card>
          {/* <Card title="task 01: update an item in the shopping cart">
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
