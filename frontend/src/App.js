import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;