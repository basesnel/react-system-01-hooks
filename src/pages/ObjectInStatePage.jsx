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
        <Title level={1} caption="Object in state" />
        <Text>Object in state of React-component case.</Text>
      </Container>
      <Container>
        <Grid>
          <Card
            title={
              <Title
                level={2}
                caption="Copying objects with the spread syntax"
              />
            }
          >
            <ObjectPractFirst />
          </Card>
          <Card title={<Title level={2} caption="Treat state as read-only" />}>
            <ObjectPractSecond />
          </Card>
          <Card title={<Title level={2} caption="Updating a nested object" />}>
            <ObjectPractThird />
          </Card>
          <Card
            title={
              <Title
                level={2}
                caption="Write concise update logic with Immer"
              />
            }
          >
            <ObjectPractFourth />
          </Card>
          <Card
            title={<Title level={2} caption="Fix incorrect state updates" />}
          >
            <ObjectTaskFirst />
          </Card>
          <Card title={<Title level={2} caption="Find and fix the mutation" />}>
            <ObjectTaskSecond />
          </Card>
          <Card
            title={<Title level={2} caption="Update an object with immer" />}
          >
            <ObjectTaskThird />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
