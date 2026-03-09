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
import Task01 from './Task01';
import Task02 from './Task02';
import Task02V2 from './Task02V2';
import Task03 from './Task03';
import Task04 from './Task04';
import Task05 from './Task05';

const tasks = [
  {
    title: <H level={2}>prac 01: tasks by usestate-hook</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac 02: tasks by usereducer-hook</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac 03: tasks with extracted tasksReducer</H>,
    task: <Prac03 />,
  },
  {
    title: <H level={2}>prac 04: the same tasks - by useImmerReducer</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>task 01: dispatch actions from event handlers</H>,
    task: <Task01 />,
  },
  {
    title: <H level={2}>task 02: clear the input on sending a message</H>,
    task: <Task02 />,
  },
  {
    title: <H level={2}>task 02: the same task, variant 2</H>,
    task: <Task02V2 />,
  },
  {
    title: <H level={2}>task 03: restore input values by tabs switching</H>,
    task: <Task03 />,
  },
  {
    title: <H level={2}>task 04: implement useReducer from scratch</H>,
    task: <Task04 />,
  },
  {
    title: <H level={2}>prac 05: context: an alternative to passing props</H>,
    task: <Prac05 />,
  },
  {
    title: <H level={2}>prac 06: multiple headings</H>,
    task: <Prac06 />,
  },
  {
    title: <H level={2}>prac 07: craating a context</H>,
    task: <Prac07 />,
  },
];

export { tasks, Prac08, Prac09, Prac10, Prac11, Task05 };
