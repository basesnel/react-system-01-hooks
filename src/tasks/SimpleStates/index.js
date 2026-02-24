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

const tasks = [
  {
    title: <H level={2}>prac01: counters with own state</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac02: counter with general state</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac03: counter a and counter b</H>,
    task: <Prac03 />,
  },
  {
    title: <H level={2}>prac04: counter with reducer</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>prac05: multi-updating to next render</H>,
    task: <Prac05 />,
  },
  {
    title: <H level={2}>prac06: update state after replacing</H>,
    task: <Prac06 />,
  },
];

export { tasks, Prac07, Prac08, Prac09, Prac10, Prac11 };
