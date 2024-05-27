import { BrowserRouter, Routes, Route } from 'react';
import Home from './pages/Home';
import Styleguide from './pages/Styleguide';
import NoPage from './pages/NoPage';

import './sass/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styleguide" element={<Styleguide />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
