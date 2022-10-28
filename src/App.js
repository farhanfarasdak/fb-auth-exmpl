import './App.css';
import Register from './pages/register';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
