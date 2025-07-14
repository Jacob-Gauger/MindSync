import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Journal from './components/Journal';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
    </div>
  );
}

export default App;
