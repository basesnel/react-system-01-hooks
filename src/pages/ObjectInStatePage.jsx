import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import FlexBox from 'components/FlexBox';
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
        <FlexBox>
          <Card>
            <Title level={2} caption="Object: first case" />
            <ObjectPractFirst />
          </Card>
          <Card>
            <Title level={2} caption="Object: second case" />
            <ObjectPractSecond />
          </Card>
          <Card>
            <Title level={2} caption="Object: third case" />
            <ObjectPractThird />
          </Card>
          <Card>
            <Title level={2} caption="Object: fourth case" />
            <ObjectPractFourth />
          </Card>
          <Card>
            <Title level={2} caption="Object: first task" />
            <ObjectTaskFirst />
          </Card>
          <Card>
            <Title level={2} caption="Object: second task" />
            <ObjectTaskSecond />
          </Card>
          <Card>
            <Title level={2} caption="Object: third task" />
            <ObjectTaskThird />
          </Card>
        </FlexBox>
      </Container>
    </main>
  );
};
