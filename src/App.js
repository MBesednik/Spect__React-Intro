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
import React, { useState, useEffect, useContext } from 'react';
import { SecureRoute } from '../src/lib/style/generalStyles';
import { AuthContext } from "./context/AuthContext";

export default function App() {
  
const { setIsLoggedIn, setIsAdmin } = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/event/:id" component={Event} />
          <SecureRoute role='isAnonymous' path="/login" component={Login} />
          <SecureRoute role='isAnonymous' path="/register" component={Register}/>
          <SecureRoute role='isAdmin' path='/admin' component={Admin} />
        </Switch>
      </Main> 
      <Footer/>
    </>
  );
}

