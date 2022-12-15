import React, { useContext } from 'react';
import './App.css';
import Home from './component/Home'
import Authenticate from './component/Authenticate'
import Header from './component/Header';
import AuthContext from './context/AuthContext';

function App() {
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <Header />
      {!ctx.isLoggedIn && <Authenticate />}
      {ctx.isLoggedIn && <Home />}
    </React.Fragment >
  );
}

export default App;
