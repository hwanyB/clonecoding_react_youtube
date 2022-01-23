import './App.css';
import { Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Home from './pages/Home';
import Assignment from './pages/Assignment';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/subscription' element={<Subscription />} />
      <Route path='/assignment' element={<Assignment />} />
    </Routes>
  );
}

export default App;
