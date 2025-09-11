import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  HomePage,
  SimpleStatesPage,
  SkipFirstRenderPage,
  ColorPickerPage,
  FormPage,
  ClockPage,
  PokemonPage,
  CharactersPage,
  NewsPage,
  BigCardsPage,
  NotFoundPage,
  QueueingPage,
  ObjectInStatePage,
  ArrayInStatePage,
  UseEffectsPage,
  EscapeHatchesPageP1,
  EscapeHatchesPageP2,
  ManagingStatePage,
  ManagingStatePageP2,
} from 'pages';

import AppBar from './AppBar';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/simple-states" element={<SimpleStatesPage />} />
        <Route path="/skip-first-render" element={<SkipFirstRenderPage />} />
        <Route path="/colorpicker" element={<ColorPickerPage />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/big-cards" element={<BigCardsPage />} />
        <Route path="/queueing" element={<QueueingPage />} />
        <Route path="/objects" element={<ObjectInStatePage />} />
        <Route path="/arrays" element={<ArrayInStatePage />} />
        <Route path="/use-effects" element={<UseEffectsPage />} />
        <Route
          path="/escape-hatches-part-1"
          element={<EscapeHatchesPageP1 />}
        />
        <Route
          path="/escape-hatches-part-2"
          element={<EscapeHatchesPageP2 />}
        />
        <Route path="/managing-state" element={<ManagingStatePage />} />
        <Route
          path="/managing-state-part-2"
          element={<ManagingStatePageP2 />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
