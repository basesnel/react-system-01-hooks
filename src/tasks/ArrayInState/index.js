import { H } from 'components';
import Prac01 from './Prac01';
import Prac02 from './Prac02';
import Prac03 from './Prac03';
import Prac04 from './Prac04';
import Prac05 from './Prac05';
import Prac06 from './Prac06';
import Prac07 from './Prac07';
import Prac08 from './Prac08';
import Task01 from './Task01';
import Task02 from './Task02';
import Task03 from './Task03';
import Task04 from './Task04';

const tasks = [
  {
    title: <H level={2}>prac 01: adding to an array</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac 02: removing from an array</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac 03: transforming an array</H>,
    task: <Prac03 />,
  },
  {
    title: <H level={2}>prac 04: replacing items in an array</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>prac 05: inserting into an array</H>,
    task: <Prac05 />,
  },
  {
    title: <H level={2}>prac 06: making other changes to an array</H>,
    task: <Prac06 />,
  },
  {
    title: <H level={2}>prac 07: updating objects inside arrays</H>,
    task: <Prac07 />,
  },
  {
    title: <H level={2}>prac 08: write concise update logic with immer</H>,
    task: <Prac08 />,
  },
];

export { tasks, Task01, Task02, Task03, Task04 };
