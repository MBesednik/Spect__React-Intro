import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Pages/Home/Home';
import Events from './Pages/Events/Events';
import Event from './Pages/SingleEvent/SingleEvent';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Event" component={Event} />
      </Main>
      <Footer/>
    </>
  );
}

