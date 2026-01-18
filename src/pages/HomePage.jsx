import { Main, Container, H, P } from 'components';

const HomePage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>react hook cases</H>
        <H level={2}>Welcome to hook cases on React!</H>
        <P>
          Content of this page isn't important. But I need it to think headings
          and text over by describing this project.
        </P>
        <P>This practice project is about React-hooks' cases.</P>
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
        <P>Simple page shows simple useState-hook cases on React.</P>
        <H level={5}>Practice 01</H>
        <P>
          It shows useState-hook case on React for components with own state.
        </P>
        <H level={5}>Practice 02</H>
        <P>
          It shows useState-hook case on React for components with general
          state.
        </P>
        <H level={5}>Practice 03</H>
        <P>
          In this case title of web-page shows sum of buttons' clickings by
          useEffect.
        </P>
        <H level={4}>Manage-state page part II</H>
        <P>It shows some managing of state cases on React for components.</P>
        <H level={5}>Practice 01</H>
        <P>It shows how state lifts up.</P>
        <H level={6}>About</H>
        <P>There is text of about.</P>
        <H level={6}>Etymology</H>
        <P>There is text of etymology.</P>
        <H level={5}>Practice 02</H>
        <P>There is hardcoded value.</P>
        <H level={6}>About</H>
        <P>There is text of about.</P>
        <H level={6}>Etymology</H>
        <P>There is text of etymology.</P>
        <H level={5}>Practice 03</H>
        <P>There is updating of lifting state up.</P>
        <H level={6}>About</H>
        <P>There is text of about.</P>
        <H level={6}>Etymology</H>
        <P>There is text of etymology.</P>
      </Container>
    </Main>
  );
};

export { HomePage };
