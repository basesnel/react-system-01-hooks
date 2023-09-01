import Container from 'components/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';
import { SkipFirstRender } from 'components/SkipFirstRender/SkipFirstRender';

export const SkipFirstRenderPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Skip first render" />
        <Text>Skop first render - useEffect case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Skip first render" />
        <SkipFirstRender />
      </Container>
    </main>
  );
};
