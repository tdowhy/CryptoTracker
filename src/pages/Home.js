import React, {useState, useEffect} from 'react';
import Coin from '../components/Coin';
import coingecko from '../apis/coingecko_api';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Ripple } from 'react-spinners-css';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        coingecko.get('/coins/markets', {
            params: {
                vs_currency: 'cad',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
            },
        })
        .then(response => {
        setCoins(response.data)
        })
        .catch(error => console.log(error));
        setLoading(false);
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className="main-ctnr mt-3 mr-2">
            {loading ? (
                <Ripple className="loading-spinner" color="#e98074" size={200} />
            ) : (
            <>
            <div className="inp-ctnr">
                <input className="rounded border-0" type="text" placeholder="Search for a coin..." onChange={handleChange} />
            </div>
            <ul className="lost-group mt-2">
                {filteredCoins.map(coin => {
                    return (
                    <Coin key={coin.id} id={coin.id} name={coin.name} symbol={coin.symbol} image={coin.image} current_price={coin.current_price} market_cap={coin.market_cap} total_volume={coin.total_volume} price_change={coin.price_change_percentage_24h} />
                    )
                })}
            </ul>
            </>)}
        </div>
    )
}

export default Home;

            {/* <div className="table-headers">
                <div className="header-row">
                    <p className="coin-header">Coin</p>
                    <p className="price-header">Price</p>
                    <p className="market-cap-header">Market Cap</p>
                    <p className="price-change-header">24H Change</p>
                    <p className="volume-header">Volume</p>
                </div>
            </div> */}
