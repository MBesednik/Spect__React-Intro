import './App.scss';
import Header from './components/Header/Header';
import { Main } from '../src/lib/style/generalStyles';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/SingleEvent/SingleEvent';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function App() {
  return (
    <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Main>
      <Footer/>
    </>
  );
}

