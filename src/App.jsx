import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
