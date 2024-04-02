import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import ObjectPractFirst from 'tasks/objects/ObjectPractFirst';
import ObjectPractSecond from 'tasks/objects/ObjectPractSecond/ObjectPractSecond';
import ObjectPractThird from 'tasks/objects/ObjectPractThird/ObjectPractThird';
import ObjectPractFourth from 'tasks/objects/ObjectPractFourth/ObjectPractFourth';
import ObjectTaskFirst from 'tasks/objects/ObjectTaskFirst/ObjectTaskFirst';
import ObjectTaskSecond from 'tasks/objects/ObjectTaskSecond';
import ObjectTaskThird from 'tasks/objects/ObjectTaskThird';

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
            <ObjectPractFirst />
          </Card>
          <Card title="prac 02: treat state as read-only">
            <ObjectPractSecond />
          </Card>
          <Card title="prac 03: updating a nested object">
            <ObjectPractThird />
          </Card>
          <Card title="prac 04: write concise update logic with Immer">
            <ObjectPractFourth />
          </Card>
          <Card title="task 01: fix incorrect state updates">
            <ObjectTaskFirst />
          </Card>
          <Card title="task 02: find and fix the mutation">
            <ObjectTaskSecond />
          </Card>
          <Card title="task 03: update an object with immer">
            <ObjectTaskThird />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
