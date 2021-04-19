import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Main>
       <Home/>
      </Main>
      <Footer/>
    </>
  );
}

export default App;