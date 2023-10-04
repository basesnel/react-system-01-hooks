import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import SkipFirstRender from 'tasks/SkipFirstRender';

export const SkipFirstRenderPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="skip first render" />
        <Text>Skip first render - useEffect case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="skip first render" />
        <SkipFirstRender />
      </Container>
    </main>
  );
};
