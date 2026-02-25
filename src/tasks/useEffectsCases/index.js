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
import Prac16 from './Prac16';

const tasks = [
  {
    title: <H level={2}>prac 01: connecting to chat server</H>,
    task: <Prac01 />,
  },
  {
    title: <H level={2}>prac 02: listening to global browser event</H>,
    task: <Prac02 />,
  },
  {
    title: <H level={2}>prac 03: triggering an animation</H>,
    task: <Prac03 />,
  },
  {
    title: <H level={2}>prac 04: controlling a modal dialog</H>,
    task: <Prac04 />,
  },
  {
    title: <H level={2}>prac 05: tracking element visibility</H>,
    task: <Prac05 />,
  },
  {
    title: <H level={2}>prac 06: custom usechatroom hook</H>,
    task: <Prac06 />,
  },
  {
    title: <H level={2}>prac 07: custom usecwindowlistener hook</H>,
    task: <Prac07 />,
  },
  {
    title: <H level={2}>prac 08: custom useintersectionobserver hook</H>,
    task: <Prac08 />,
  },
];

export {
  tasks,
  Prac09,
  Prac10,
  Prac11,
  Prac12,
  Prac13,
  Prac14,
  Prac15,
  Prac16,
};
