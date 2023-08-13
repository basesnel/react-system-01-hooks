import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/HomePage';
import { Counter } from '../pages/CounterPage';
import { Form } from '../pages/FormPage';
import { Time } from '../pages/TimePage';
import { NotFound } from '../pages/NotFoundPage';

import { AppBar } from './AppBar/AppBar';

import './App.css';

function App() {
  return (
    <div>
      <AppBar />
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
