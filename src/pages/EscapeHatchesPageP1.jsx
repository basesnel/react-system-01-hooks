import { Main, Container, P, Grid, Card2, H } from 'components';

import { escapeHatchesP01 } from 'tasks';

const EscapeHatchesPageP1 = () => {
  const {
    Prac04,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Prac09,
    Prac10,
    Prac11,
    Prac12,
    Prac13,
    Prac14,
    Task01,
    Task02,
    Task03,
    Task04,
    Task05,
    Task06,
    Task07,
    Task08,
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

          <Card2
            title={<H level={2}>prac 04: difference between refs and state</H>}
          >
            <Prac04 />
          </Card2>
          <Card2 title={<H level={2}>task 01: fix a broken chat input</H>}>
            <Task01 />
          </Card2>
          <Card2
            title={
              <H level={2}>task 02: fix a component failed to re-render</H>
            }
          >
            <Task02 />
          </Card2>
          <Card2 title={<H level={2}>task 03: fix debouncing</H>}>
            <Task03 />
          </Card2>
          <Card2 title={<H level={2}>task 04: read the latest state</H>}>
            <Task04 />
          </Card2>
          <Card2
            title={<H level={2}>prac 05: manipulating the dom with refs</H>}
          >
            <Prac05 />
          </Card2>
          <Card2 title={<H level={2}>prac 06: scrolling to an element</H>}>
            <Prac06 />
          </Card2>
          <Card2
            title={
              <H level={2}>
                prac 07: how to manage a list of refs using a ref callback
              </H>
            }
          >
            <Prac07 />
          </Card2>
          <Card2
            title={
              <H level={2}>prac 08: accessing another component's dom node</H>
            }
          >
            <Prac08 />
          </Card2>
          <Card2
            title={
              <H level={2}>
                prac 09: flushing state updates synchronously with flushsync
              </H>
            }
          >
            <Prac09 />
          </Card2>
          <Card2
            title={
              <H level={2}>
                prac 10: best pracices for dom manipulation with refs
              </H>
            }
          >
            <Prac10 />
          </Card2>
          <Card2 title={<H level={2}>task 05: play and pause the video</H>}>
            <Task05 />
          </Card2>
          <Card2 title={<H level={2}>task 06: focus the search field</H>}>
            <Task06 />
          </Card2>
          <Card2 title={<H level={2}>task 07: scrolling an image carousel</H>}>
            <Task07 />
          </Card2>
          <Card2
            title={
              <H level={2}>
                task 08: focusing the search field with separate components
              </H>
            }
          >
            <Task08 />
          </Card2>
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
