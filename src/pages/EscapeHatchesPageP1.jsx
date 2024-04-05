import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';
import Prac01 from 'tasks/EscapeHatchesP01/Prac01';
import Prac02 from 'tasks/EscapeHatchesP01/Prac02';
import Prac03 from 'tasks/EscapeHatchesP01/Prac03';
import Prac04 from 'tasks/EscapeHatchesP01/Prac04';
import Task01 from 'tasks/EscapeHatchesP01/Task01';
import Task02 from 'tasks/EscapeHatchesP01/Task02';
import Task03 from 'tasks/EscapeHatchesP01/Task03';
import Task04 from 'tasks/EscapeHatchesP01/Task04';
import Prac05 from 'tasks/EscapeHatchesP01/Prac05';
import Prac06 from 'tasks/EscapeHatchesP01/Prac06';
import Prac07 from 'tasks/EscapeHatchesP01/Prac07';
import Prac08 from 'tasks/EscapeHatchesP01/Prac08';
import Prac09 from 'tasks/EscapeHatchesP01/Prac09';
import Prac10 from 'tasks/EscapeHatchesP01/Prac10';
import Task05 from 'tasks/EscapeHatchesP01/Task05';
import Task06 from 'tasks/EscapeHatchesP01/Task06';
import Task07 from 'tasks/EscapeHatchesP01/Task07';
import Task08 from 'tasks/EscapeHatchesP01/Task08';
import Prac11 from 'tasks/EscapeHatchesP01/Prac11';
import Prac12 from 'tasks/EscapeHatchesP01/Prac12';
// import AddCleanup from 'tasks/EscapeHatches/AddCleanup';
// import PutAllTogether from 'tasks/EscapeHatches/PutAllTogether';
// import FocusOnMount from 'tasks/EscapeHatches/FocusOnMount';
// import FocusOnMountCond from 'tasks/EscapeHatches/FocusOnMountCond';
// import FixAnInterval from 'tasks/EscapeHatches/FixAnInterval';
// import FixFetchingInEffect from 'tasks/EscapeHatches/FixFetchingInEffect';

export const EscapeHatchesPageP1 = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="escape hatches - part 1" />
        <Paragraph>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: referencing values with refs">
            <Prac01 />
          </Card>
          <Card title="prac 02: starting a stopwatch">
            <Prac02 />
          </Card>
          <Card title="prac 03: building a stopwatch">
            <Prac03 />
          </Card>
          <Card title="prac 04: difference between refs and state">
            <Prac04 />
          </Card>
          <Card title="task 01: fix a broken chat input">
            <Task01 />
          </Card>
          <Card title="task 02: fix a component failed to re-render">
            <Task02 />
          </Card>
          <Card title="task 03: fix debouncing">
            <Task03 />
          </Card>
          <Card title="task 04: read the latest state">
            <Task04 />
          </Card>
          <Card title="prac 05: manipulating the dom with refs">
            <Prac05 />
          </Card>
          <Card title="prac 06: scrolling to an element">
            <Prac06 />
          </Card>
          <Card title="prac 07: how to manage a list of refs using a ref callback">
            <Prac07 />
          </Card>
          <Card title="prac 08: accessing another component's dom node">
            <Prac08 />
          </Card>
          <Card title="prac 09: flushing state updates synchronously with flushsync">
            <Prac09 />
          </Card>
          <Card title="prac 10: best pracices for dom manipulation with refs">
            <Prac10 />
          </Card>
          <Card title="task 05: play and pause the video">
            <Task05 />
          </Card>
          <Card title="task 06: focus the search field">
            <Task06 />
          </Card>
          <Card title="task 07: scrolling an image carousel">
            <Task07 />
          </Card>
          <Card title="task 08: focusing the search field  with separate components">
            <Task08 />
          </Card>
          <Card title="prac 11: declare an effect">
            <Prac11 />
          </Card>
          <Card title="prac 12: specify the effect dependancies">
            <Prac12 />
          </Card>
          {/* <Card title="prac 13: add cleanup if needed">
            <AddCleanup />
          </Card>
          <Card title="prac 14: putting it all together">
            <PutAllTogether />
          </Card>
          <Card title="task 09: focus on field on mount">
            <FocusOnMount />
          </Card>
          <Card title="task 10: focus a field conditionally">
            <FocusOnMountCond />
          </Card>
          <Card title="task 11: fix an interval that fires twice">
            <FixAnInterval />
          </Card>
          <Card title="task 12: fix fetching inside an effect">
            <FixFetchingInEffect />
          </Card> */}
        </Grid>
      </Container>
    </main>
  );
};
