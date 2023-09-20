import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomePage } from '../pages/HomePage';
import { CounterPage } from '../pages/CounterPage';
import { SkipFirstRenderPage } from '../pages/SkipFirstRenderPage';
import { ColorPickerPage } from '../pages/ColorPickerPage';
import { FormPage } from '../pages/FormPage';
import { ClockPage } from '../pages/ClockPage';
import { PokemonPage } from '../pages/PokemonPage';
import { CharactersPage } from '../pages/CharactersPage';
import { NewsPage } from '../pages/NewsPage';
import { BigCardsPage } from '../pages/BigCardsPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { QueueingPage } from '../pages/QueueingPage';
import { ObjectInStatePage } from '../pages/ObjectInStatePage';

import AppBar from './AppBar';

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
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/big-cards" element={<BigCardsPage />} />
        <Route path="/queueing" element={<QueueingPage />} />
        <Route path="/objects" element={<ObjectInStatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
