import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import ObjectInState from 'components/ObjectInState';

export const ObjectInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Object in state" />
        <Text>Object in state of React-component case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Object: first case" />
        <ObjectInState />
      </Container>
    </main>
  );
};
