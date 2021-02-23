import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
    {/* <Header /> */}
      <div className="cryptotracker-app">
        <Header />
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coins/:id" component={CoinPage} />
          <Route component={Error} />
        </Switch>
        </BrowserRouter>
      </div>
      <Footer className="ftr" />
    </>
  );
}

export default App;
