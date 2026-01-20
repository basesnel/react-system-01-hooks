import { Main, Container, H, P } from 'components';

const HomePage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>react hook cases</H>
        <H level={2}>Welcome to hook cases on React!</H>
        <P>
          The content of this page is not important. But I had to think through
          the size and styling of the headings and text in accordance with{' '}
          <b>a11y</b>&ndash;recommendations. That was the purpose of this page
          &mdash; nothing more.
        </P>
        <P>This practical project is dedicated to use cases for React hooks.</P>
        <H level={3}>Project's contents</H>
        <P>
          Here is a brief description of the project using headings and text.
        </P>
        <H level={4}>Form page</H>
        <P>
          This page shows a simple use case for hooks in React using a web form
          as an example.
        </P>
        <H level={4}>Clock page</H>
        <P>
          The Clock page shows a simple use case for the useEffect hook in
          React.
        </P>
        <H level={4}>Pokemon page</H>
        <P>
          The Pokemon page shows a simple example of a Rest request to
          Pokemon-api on React.
        </P>
        <H level={4}>Simple-state page</H>
        <P>
          The Simple-state page shows the simplest use cases for the useState
          hook in React.
        </P>
        <H level={5}>Practice 01</H>
        <P>
          It demonstrates the use of the useState hook in React for components
          with their own state.
        </P>
        <H level={5}>Practice 02</H>
        <P>
          It demonstrates the use of the useState hook in React for components
          with shared state.
        </P>
        <H level={5}>Practice 03</H>
        <P>
          In this case, the web page title shows the number of clicks on the
          buttons using useEffect.
        </P>
        <H level={4}>Manage-state page part II</H>
        <P>
          This page shows some ways to manage state in React for components.
        </P>
        <H level={5}>Practice 01</H>
        <P>It shows how state lifts up.</P>
        <H level={6}>About</H>
        <P>
          There is text of about. This sample text serves to fill in and
          visualize the task description.
        </P>
        <H level={6}>Etymology</H>
        <P>
          There is a text on etymology. This sample text serves to fill in and
          visualize the task description.
        </P>
        <H level={5}>Practice 02</H>
        <P>There is hardcoded value.</P>
        <H level={6}>About</H>
        <P>
          There is text of about. This sample text serves to fill in and
          visualize the task description.
        </P>
        <H level={6}>Etymology</H>
        <P>
          There is text of etymology. This sample text serves to fill in and
          visualize the task description.
        </P>
        <H level={5}>Practice 03</H>
        <P>There is updating of lifting state up.</P>
        <H level={6}>About</H>
        <P>
          There is text of about. This sample text serves to fill in and
          visualize the task description.
        </P>
        <H level={6}>Etymology</H>
        <P>
          There is text of etymology. This sample text serves to fill in and
          visualize the task description.
        </P>
      </Container>
    </Main>
  );
};

export { HomePage };
