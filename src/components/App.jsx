import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { CounterPage } from '../pages/CounterPage';
import { ColorPickerPage } from '../pages/ColorPickerPage';
import { FormPage } from '../pages/FormPage';
import { TimePage } from '../pages/TimePage';
import { NotFoundPage } from '../pages/NotFoundPage';

import { AppBar } from './AppBar/AppBar';

import './App.css';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/colorpicker" element={<ColorPickerPage />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
