import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/HomePage';
import { Counter } from '../pages/CounterPage';
import { Form } from '../pages/FormPage';
import { Time } from '../pages/TimePage';
import { NotFound } from '../pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <div>
      <p>Logo</p>
      <nav>
        <NavLink to="/count">Count</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/time">Time</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/time" element={<Time />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
