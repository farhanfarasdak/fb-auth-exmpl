import './App.css';
import Register from './pages/register';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import Biodata from './pages/biodata';
import UserDetail from './pages/userDetail';
import { decodedToken } from './action/auth';

function App() {
  let user
  if(localStorage.getItem('jwt-token')){
    user = decodedToken(localStorage.getItem('jwt-token'))
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />


        <Route path="/home" element={<Home user={user}/>} />
        <Route path="/biodata" element={<Biodata user={user}/>} />
        <Route path="/user/:id" element={<UserDetail builder="Made By Farhan" user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
