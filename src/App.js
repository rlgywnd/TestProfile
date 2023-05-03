import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Main from './pages/main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
