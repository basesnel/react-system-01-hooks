import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
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
        <Text>Object in state of React-component case.</Text>
      </Container>
      <Container>
        <Grid>
          <Card title="copying objects with the spread syntax">
            <ObjectPractFirst />
          </Card>
          <Card title="treat state as read-only">
            <ObjectPractSecond />
          </Card>
          <Card title="updating a nested object">
            <ObjectPractThird />
          </Card>
          <Card title="write concise update logic with Immer">
            <ObjectPractFourth />
          </Card>
          <Card title="fix incorrect state updates">
            <ObjectTaskFirst />
          </Card>
          <Card title="find and fix the mutation">
            <ObjectTaskSecond />
          </Card>
          <Card title="update an object with immer">
            <ObjectTaskThird />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
