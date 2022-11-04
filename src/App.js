import './App.css';
import Register from './pages/register';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import Biodata from './pages/biodata';
import UserDetail from './pages/userDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/biodata" element={<Biodata/>} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
