import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import Prac01 from 'tasks/ObjectsInState/Prac01';
import Prac02 from 'tasks/ObjectsInState/Prac02';
import Prac03 from 'tasks/ObjectsInState/Prac03';
import Prac04 from 'tasks/ObjectsInState/Prac04';
// import ObjectTaskFirst from 'tasks/ObjectsInState/ObjectTaskFirst/ObjectTaskFirst';
// import ObjectTaskSecond from 'tasks/ObjectsInState/ObjectTaskSecond';
// import ObjectTaskThird from 'tasks/ObjectsInState/ObjectTaskThird';

export const ObjectInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="object in state" />
        <Paragraph>Object in state of React-component case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: copying objects with the spread syntax">
            <Prac01 />
          </Card>
          <Card title="prac 02: treat state as read-only">
            <Prac02 />
          </Card>
          <Card title="prac 03: updating a nested object">
            <Prac03 />
          </Card>
          <Card title="prac 04: write concise update logic with Immer">
            <Prac04 />
          </Card>
          {/* <Card title="task 01: fix incorrect state updates">
            <ObjectTaskFirst />
          </Card>
          <Card title="task 02: find and fix the mutation">
            <ObjectTaskSecond />
          </Card>
          <Card title="task 03: update an object with immer">
            <ObjectTaskThird />
          </Card> */}
        </Grid>
      </Container>
    </main>
  );
};
