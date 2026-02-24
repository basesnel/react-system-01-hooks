import { H } from 'components';
import Prac01 from './Prac01';
import Prac02 from './Prac02';
import Prac03 from './Prac03';
import Prac04 from './Prac04';
import Task01 from './Task01';
import Task02 from './Task02';
import Task03 from './Task03';

const tasks = [
  {
    title: <H level={2}>prac 01: copying objects with the spread syntax</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac 02: treat state as read-only</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac 03: updating a nested object</H>,
    task: <Prac03 />,
  },
];

export { tasks, Prac04, Task01, Task02, Task03 };
