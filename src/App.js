import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/HomePage/HomePage";
import Tracker from "./pages/Tracker/Tracker"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/tracker" element = {<Tracker /> } />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
