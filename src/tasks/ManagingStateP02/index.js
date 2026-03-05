import { H } from 'components';
import Prac01 from './Prac01';
import Prac02 from './Prac02';
import Prac03 from './Prac03';
import Prac04 from './Prac04';
import Prac05 from './Prac05';
import Prac06 from './Prac06';
import Prac07 from './Prac07';
import Prac08 from './Prac08';
import Prac09 from './Prac09';
import Prac10 from './Prac10';
import Prac11 from './Prac11';
import Prac12 from './Prac12';
import Prac13 from './Prac13';
import Prac14 from './Prac14';
import Prac15 from './Prac15';
import Task01 from './Task01';
import Task02 from './Task02';
import Task03 from './Task03';
import Task04 from './Task04';
import Task05 from './Task05';
import Task06 from './Task06';
import Task07 from './Task07';

const tasks = [
  {
    title: <H level={2}>prac 01: lifting state up</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac 02: pass hardcoded value</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac 03: set up lifting state up</H>,
    task: <Prac03 />,
  },
  {
    title: <H level={2}>task 01: synced inputs</H>,
    task: <Task01 />,
  },
  {
    title: <H level={2}>task 02: filtering a list</H>,
    task: <Task02 />,
  },
  {
    title: <H level={2}>prac 04: state is tied to a render tree position</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>prac 05: group related state</H>,
    task: <Prac05 />,
  },
  {
    title: <H level={2}>prac 06: component preserves state (the same place)</H>,
    task: <Prac06 />,
  },
  {
    title: <H level={2}>prac 07: pitfall of the position in the ui-tree</H>,
    task: <Prac07 />,
  },
  {
    title: <H level={2}>prac 08: diffrent components reset state</H>,
    task: <Prac08 />,
  },
  {
    title: <H level={2}>prac 09: resetting state in the component's subtree</H>,
    task: <Prac09 />,
  },
  {
    title: <H level={2}>prac 10: pitfall of nest component definition</H>,
    task: <Prac10 />,
  },
];

export {
  tasks,
  Prac11,
  Prac12,
  Prac13,
  Prac14,
  Prac15,
  Task03,
  Task04,
  Task05,
  Task06,
  Task07,
};
