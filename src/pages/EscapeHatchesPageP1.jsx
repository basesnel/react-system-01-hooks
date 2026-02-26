import { Main, Container, P, Grid, Card2, H } from 'components';

import { escapeHatchesP01 } from 'tasks';

const EscapeHatchesPageP1 = () => {
  const {
    Prac11,
    Prac12,
    Prac13,
    Prac14,
    Task09,
    Task10,
    Task11,
    Task12,
    tasks,
  } = escapeHatchesP01;

  return (
    <Main>
      <Container>
        <H level={1}>escape hatches - part i</H>
        <P>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}

          <Card2 title={<H level={2}>prac 11: declare an effect</H>}>
            <Prac11 />
          </Card2>
          <Card2
            title={<H level={2}>prac 12: specify the effect dependancies</H>}
          >
            <Prac12 />
          </Card2>
          <Card2 title={<H level={2}>prac 13: add cleanup if needed</H>}>
            <Prac13 />
          </Card2>
          <Card2 title={<H level={2}>prac 14: putting it all together</H>}>
            <Prac14 />
          </Card2>
          <Card2 title={<H level={2}>task 09: focus on field on mount</H>}>
            <Task09 />
          </Card2>
          <Card2 title={<H level={2}>task 10: focus a field conditionally</H>}>
            <Task10 />
          </Card2>
          <Card2
            title={<H level={2}>task 11: fix an interval that fires twice</H>}
          >
            <Task11 />
          </Card2>
          <Card2
            title={<H level={2}>task 12: fix fetching inside an effect</H>}
          >
            <Task12 />
          </Card2>
        </Grid>
      </Container>
    </Main>
  );
};

export { EscapeHatchesPageP1 };
