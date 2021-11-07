import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './screens/login/login';
import Home from './screens/home/home';
import Navbar from './components/navbar/navbar'


export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  return (
    <div>
      <Router>
        <Navbar user={user} onLogout={() => setUser(null)} />
        <Routes>
        {user ? (
          <Route path='/' element={<Home />}/>
        ) : (
          <Route exact path='/' element={<Login onLogin={(user) => login(user)} />}/>
        )}
        </Routes>
      </Router>
    </div>
  );
}
