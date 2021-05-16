import './App.scss';
import Header from './components/Header/Header';
import { Main } from '../src/lib/style/generalStyles';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/SingleEvent/SingleEvent';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Admin } from './pages/Admin/Admin';
import React, { useState, useEffect } from 'react';
import { SecureRoute } from '../src/lib/style/generalStyles';

export default function App() {

  const [ isAdmin, setIsAdmin ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, []);

  function login(authToken, isAdmin) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('isAdmin', isAdmin);
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  }

  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setIsAdmin(false);
  }
  return (
    <>
      <Header isAdmin={isAdmin} isLoggedIn={isLoggedIn} logout={logout} />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/event/:id" component={Event} />
          <SecureRoute role='isLoggedIn' isLoggedIn={!isLoggedIn} path="/login" login={login} component={Login} />
          <SecureRoute role='isLoggedIn' isLoggedIn={!isLoggedIn} path="/register" login={login} component={Register}/>
          <SecureRoute role='isAdmin' isAdmin={isAdmin} path='/admin' component={Admin} />
        </Switch>
      </Main> 
      <Footer/>
    </>
  );
}

