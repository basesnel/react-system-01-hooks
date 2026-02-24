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
  {
    title: <H level={2}>prac 04: write concise update logic with Immer</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>task 01: fix incorrect state updates</H>,
    task: <Task01 />,
  },
  {
    title: <H level={2}>task 02: find and fix the mutation</H>,
    task: <Task02 />,
  },
  {
    title: <H level={2}>task 03: update an object with immer</H>,
    task: <Task03 />,
  },
];

export { tasks };
