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
          <Card title={<Title level={2} caption="Object: first case" />}>
            <ObjectPractFirst />
          </Card>
          <Card title={<Title level={2} caption="Object: second case" />}>
            <ObjectPractSecond />
          </Card>
          <Card title={<Title level={2} caption="Object: third case" />}>
            <ObjectPractThird />
          </Card>
          <Card title={<Title level={2} caption="Object: fourth case" />}>
            <ObjectPractFourth />
          </Card>
          <Card title={<Title level={2} caption="Object: first task" />}>
            <ObjectTaskFirst />
          </Card>
          <Card title={<Title level={2} caption="Object: second task" />}>
            <ObjectTaskSecond />
          </Card>
          <Card title={<Title level={2} caption="Object: third task" />}>
            <ObjectTaskThird />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
