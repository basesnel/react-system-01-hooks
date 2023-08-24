import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { CounterPage } from '../pages/CounterPage';
import { SkipFirstRenderPage } from '../pages/SkipFirstRenderPage';
import { ColorPickerPage } from '../pages/ColorPickerPage';
import { FormPage } from '../pages/FormPage';
import { ClockPage } from '../pages/ClockPage';
import { PokemonPage } from '../pages/PokemonPage';
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
        <Route path="/skip-first-render" element={<SkipFirstRenderPage />} />
        <Route path="/colorpicker" element={<ColorPickerPage />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
