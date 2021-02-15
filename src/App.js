import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
    {/* <Header /> */}
      <div className="cryptotracker-app">
        <Header />
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coins/:id" component={CoinPage} />
        </Switch>
        {/* <Footer className="Footer" /> */}
        </BrowserRouter>
        {/* <Footer className="Footer" /> */}
      </div>
      <Footer className="ftr" />
    </>
  );
}

export default App;
