import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Route exact path="/" component={Home} />
      </Main>
      <Footer/>
    </>
  );
}

export default App;