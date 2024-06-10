import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/HomePage/HomePage.jsx";
import Tracker from "./pages/Tracker/Tracker.jsx";
import Game from "./pages/Game/Game.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/tracker" element = {<Tracker /> } />
        <Route path="/game" element = {<Game />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
