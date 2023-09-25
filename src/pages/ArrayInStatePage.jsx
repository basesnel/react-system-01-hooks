import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import ObjectInState from 'components/ObjectInState';
import FormWithObject from 'components/FormWithObject';
import Grid from 'components/Grid';
import Card from 'components/Card';
import NestedObject from 'components/NestedObject';
import NestedObjectByImmer from 'components/NestedObjectByImmer/NestedObjectByImmer';

export const ArrayInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Array in state" />
        <Text>Object in state of React-component case.</Text>
      </Container>
      <Container>
        <Grid>
          <Card>
            <Title level={2} caption="Array: first case" />
            <FormWithObject />
          </Card>
          <Card>
            <Title level={2} caption="Array: second case" />
            <ObjectInState />
          </Card>
          <Card>
            <Title level={2} caption="Array: third case" />
            <NestedObject />
          </Card>
          <Card>
            <Title level={2} caption="Array: fourth case" />
            <NestedObjectByImmer />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
