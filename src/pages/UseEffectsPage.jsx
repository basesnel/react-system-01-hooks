import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { useEffectsCases } from 'tasks';

const UseEffectsPage = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
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
    Prac15,
    Prac16,
  } = useEffectsCases;

  return (
    <Main>
      <Container>
        <H level={1}>useeffect cases</H>
        <P>useEffect hook cases.</P>
      </Container>
      <Container>
        <Grid>
          <Card2 title={<H level={2}>prac 01: connecting to chat server</H>}>
            <Prac01 />
          </Card2>
          <Card2
            title={<H level={2}>prac 02: listening to global browser event</H>}
          >
            <Prac02 />
          </Card2>
          <Card2 title={<H level={2}>prac 03: triggering an animation</H>}>
            <Prac03 />
          </Card2>
          <Card2 title={<H level={2}>prac 04: controlling a modal dialog</H>}>
            <Prac04 />
          </Card2>
          <Card2 title={<H level={2}>prac 05: tracking element visibility</H>}>
            <Prac05 />
          </Card2>
          <Card2 title={<H level={2}>prac 06: custom usechatroom hook</H>}>
            <Prac06 />
          </Card2>
          <Card2
            title={<H level={2}>prac 07: custom usecwindowlistener hook</H>}
          >
            <Prac07 />
          </Card2>
          <Card2
            title={
              <H level={2}>prac 08: custom useintersectionobserver hook</H>
            }
          >
            <Prac08 />
          </Card2>
          <Card title="prac 09: controlling  a non-react widget">
            <Prac09 />
          </Card>
          <Card title="prac 10: fetching data with effects">
            <Prac10 />
          </Card>
          <Card title="prac 11: passing a dependancy array">
            <Prac11 />
          </Card>
          <Card title="prac 12: passing an empty dependancy array">
            <Prac12 />
          </Card>
          <Card title="prac 13: passing no dependancy array at all">
            <Prac13 />
          </Card>
          <Card title="prac 14: updating state based on previous state from an effect">
            <Prac14 />
          </Card>
          <Card title="prac 15: removing unnecessary object dependancies">
            <Prac15 />
          </Card>
          <Card title="prac 16: removing unnecessary function dependancies">
            <Prac16 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { UseEffectsPage };
