import { Container, H, P, Grid, Card2, Main } from 'components';

import { arrayInState } from 'tasks';

const ArrayInStatePage = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
    Prac04,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Task01,
    Task02,
    Task03,
    Task04,
  } = arrayInState;

  return (
    <Main>
      <Container>
        <H level={1}>array in state</H>
        <P>Array in state of React-component case.</P>
      </Container>
      <Container>
        <Grid>
          <Card2 title={<H level={2}>prac 01: adding to an array</H>}>
            <Prac01 />
          </Card2>
          <Card2 title={<H level={2}>prac 02: removing from an array</H>}>
            <Prac02 />
          </Card2>
          <Card2 title={<H level={2}>prac 03: transforming an array</H>}>
            <Prac03 />
          </Card2>
          <Card2 title={<H level={2}>prac 04: replacing items in an array</H>}>
            <Prac04 />
          </Card2>
          <Card2 title={<H level={2}>prac 05: inserting into an array</H>}>
            <Prac05 />
          </Card2>
          <Card2
            title={<H level={2}>prac 06: making other changes to an array</H>}
          >
            <Prac06 />
          </Card2>
          <Card2
            title={<H level={2}>prac 07: updating objects inside arrays</H>}
          >
            <Prac07 />
          </Card2>
          <Card2
            title={
              <H level={2}>prac 08: write concise update logic with immer</H>
            }
          >
            <Prac08 />
          </Card2>
          <Card2
            title={
              <H level={2}>task 01: update an item in the shopping cart</H>
            }
          >
            <Task01 />
          </Card2>
          <Card2
            title={
              <H level={2}>task 02: remove an item in the shopping cart</H>
            }
          >
            <Task02 />
          </Card2>
          <Card2
            title={
              <H level={2}>
                task 03: fix the mutations using non-mutative methods
              </H>
            }
          >
            <Task03 />
          </Card2>
          <Card2
            title={<H level={2}>task 04: fix the mutations using immer</H>}
          >
            <Task04 />
          </Card2>
        </Grid>
      </Container>
    </Main>
  );
};

export { ArrayInStatePage };
