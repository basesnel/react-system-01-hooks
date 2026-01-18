import { Main, Container, H, P } from 'components';

const HomePage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>react hook cases</H>
        <H level={2}>Welcome to hook cases on React!</H>
        <P>This practice project is about experiences of React-hooks.</P>
        <H level={3}>Project's structure</H>
        <P>There is short project's description.</P>
        <H level={4}>Form page</H>
        <P>Form page shows simple hook-case on React.</P>
        <H level={4}>Clock page</H>
        <P>Clock page shows simple useEffect-hook cases on React.</P>
        <H level={4}>Pokemon page</H>
        <P>
          Pokemon page shows simple Rest-request to Pokemon-api case on React.
        </P>
        <H level={4}>Simple-state page</H>
        <P>Simple page shows simple useState-hook behaviors on React.</P>
        <H level={5}>Practice 01</H>
        <P>
          It shows useState-hook case on React for components with own state.
        </P>
        <H level={5}>Practice 02</H>
        <P>
          It shows useState-hook case on React for components with general
          state.
        </P>
      </Container>
    </Main>
  );
};

export { HomePage };
