import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reports from './Components/Reports/Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
