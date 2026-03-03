import { H } from 'components';
import Task01 from './Task01';
import Task02 from './Task02';
import Task03 from './Task03';
import Task04 from './Task04';
import Prac01 from './Prac01';
import Prac02 from './Prac02';
import Prac03 from './Prac03';
import Prac04 from './Prac04';
import Prac05 from './Prac05';
import Task05 from './Task05';
import Task06 from './Task06';
import Task07 from './Task07';
import Task08 from './Task08';
import Task09 from './Task09';
import Task10 from './Task10';
import Prac06 from './Prac06';
import Prac07 from './Prac07';
import Task11 from './Task11';
import Prac08 from './Prac08';
import Prac09 from './Prac09';
import Prac10 from './Prac10';
import Prac11 from './Prac11';
import Prac12 from './Prac12';
import Prac13 from './Prac13';
import Task12 from './Task12';
import Task13 from './Task13';
import Task14 from './Task14';

const tasks = [
  {
    title: <H level={2}>task 01: transform data without effects</H>,
    task: <Task01 />,
  },
  {
    title: <H level={2}>task 02: cache a calculation without effects</H>,
    task: <Task02 />,
  },
  {
    title: <H level={2}>task 03: reset state without effects</H>,
    task: <Task03 />,
  },
  {
    title: <H level={2}>task 04: submit a form without effects</H>,
    task: <Task04 />,
  },
  {
    title: <H level={2}>prac 01: re-synchonize effect</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac 02: effects to reactive values</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac 03: effects to reactive values</H>,
    task: <Prac03 />,
  },
  {
    title: <H level={2}>prac 04: react verifies values as dependancy</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>prac 05: variables is reactive</H>,
    task: <Prac05 />,
  },
  {
    title: <H level={2}>task 05: fix connecting on every keystroke</H>,
    task: <Task05 />,
  },
  {
    title: <H level={2}>task 06: switch synchronisztion on and off</H>,
    task: <Task06 />,
  },
  {
    title: <H level={2}>task 07: investigate a state value bug</H>,
    task: <Task07 />,
  },
  {
    title: <H level={2}>task 08: fix a connection switch</H>,
    task: <Task08 />,
  },
  {
    title: <H level={2}>task 09: chain of selected fields</H>,
    task: <Task09 />,
  },
  {
    title: <H level={2}>task 10: chain of selected fields (custom hook)</H>,
    task: <Task10 />,
  },
  {
    title: <H level={2}>prac 06: effects run whenever sync is needed</H>,
    task: <Prac06 />,
  },
  {
    title: <H level={2}>prac 07: non-reactive logic is outside of effects</H>,
    task: <Prac07 />,
  },
  {
    title: <H level={2}>task 11: fix variable that doesn't update</H>,
    task: <Task11 />,
  },
  {
    title: <H level={2}>prac 08: experiment with effect dependancy</H>,
    task: <Prac08 />,
  },
  {
    title: <H level={2}>prac 09: does some value change unintentionally?</H>,
    task: <Prac09 />,
  },
  {
    title: <H level={2}>prac 10: move static object outside component</H>,
    task: <Prac10 />,
  },
  {
    title: <H level={2}>prac 11: object works as function</H>,
    task: <Prac11 />,
  },
  {
    title: <H level={2}>prac 12: move dynamic objecct inside effect</H>,
    task: <Prac12 />,
  },
  {
    title: <H level={2}>prac 13: move dynamic objecct inside effect</H>,
    task: <Prac13 />,
  },
];

export { tasks, Task12, Task13, Task14 };
