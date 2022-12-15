import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home'
import Authenticate from './component/Authenticate'
import Header from './component/Header';
import AuthContext from './context/AuthContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')
    if (storedUserLoggedInInfo === '1') {
      setLoggedIn(true)
    }
  }, [])

  function logInHandler() {
    localStorage.setItem('isLoggedIn', '1')
    setLoggedIn(true)
  }
  function logoutHandler() {
    localStorage.removeItem('isLoggedIn')
    setLoggedIn(false)
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <Header logout={logoutHandler} />
      {!isLoggedIn && <Authenticate onLogIn={logInHandler} />}
      {isLoggedIn && <Home />}
    </AuthContext.Provider >
  );
}

export default App;
