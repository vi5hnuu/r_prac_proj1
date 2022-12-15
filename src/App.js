import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home'
import Authenticate from './component/Authenticate'

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
    <React.Fragment>
      <header className='header'>
        <h1 className='page_title'>A Typical Page</h1>
        {isLoggedIn && <ul className='header_actions'>
          <li>Users</li>
          <li>Admin</li>
          <li onClick={logoutHandler}>Log-Out</li>
        </ul>}
      </header>
      {!isLoggedIn && <Authenticate onLogIn={logInHandler} />}
      {isLoggedIn && <Home />}
    </React.Fragment>
  );
}

export default App;
