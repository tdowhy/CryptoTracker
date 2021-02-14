import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import CoinNav from './components/CoinNav';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <CoinNav />
      <div className="cryptotracker-app">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coins/:id" component={CoinPage} />
        </Switch>
        </BrowserRouter>
      </div>
      <Footer className="Footer" />
    </>
  );
}

export default App;
