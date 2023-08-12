import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { Home } from '../pages/HomePage';
import { Counter } from '../pages/CounterPage';
import { Form } from '../pages/FormPage';
import { Time } from '../pages/TimePage';
import { NotFound } from '../pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <div>
      <header>
        <Link to="/">WebForge</Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/time">Time</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/time" element={<Time />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
