import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import { Prac01 } from 'tasks/useEffectsCases';
import { Prac02 } from 'tasks/useEffectsCases';
import { Prac03 } from 'tasks/useEffectsCases';
import { Prac04 } from 'tasks/useEffectsCases';
import { Prac05 } from 'tasks/useEffectsCases';
import { Prac06 } from 'tasks/useEffectsCases';
import { Prac07 } from 'tasks/useEffectsCases';
import { Prac08 } from 'tasks/useEffectsCases';
import { Prac09 } from 'tasks/useEffectsCases';
import { Prac10 } from 'tasks/useEffectsCases';
import { Prac11 } from 'tasks/useEffectsCases';
import { Prac12 } from 'tasks/useEffectsCases';
import { Prac13 } from 'tasks/useEffectsCases';
import { Prac14 } from 'tasks/useEffectsCases';
import { Prac15 } from 'tasks/useEffectsCases';
import { Prac16 } from 'tasks/useEffectsCases';

const UseEffectsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="useeffect cases" />
        <Paragraph>useEffect hook cases.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: connecting to chat server">
            <Prac01 />
          </Card>
          <Card title="prac 02: listening to global browser event">
            <Prac02 />
          </Card>
          <Card title="prac 03: triggering an animation">
            <Prac03 />
          </Card>
          <Card title="prac 04: controlling a modal dialog">
            <Prac04 />
          </Card>
          <Card title="prac 05: tracking element visibility">
            <Prac05 />
          </Card>
          <Card title="prac 06: custom usechatroom hook">
            <Prac06 />
          </Card>
          <Card title="prac 07: custom usecwindowlistener hook">
            <Prac07 />
          </Card>
          <Card title="prac 08: custom useintersectionobserver hook">
            <Prac08 />
          </Card>
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
    </main>
  );
};

export { UseEffectsPage };
