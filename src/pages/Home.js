import React, {useState, useEffect} from 'react';
import Coin from '../components/Coin';
import coingecko from '../apis/coingecko_api';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
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
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <input type="text" placeholder="Search for a coin..." onChange={handleChange} />
            {filteredCoins.map(coin => {
                return (
                <Coin key={coin.id} id={coin.id} name={coin.name} symbol={coin.symbol} image={coin.image} current_price={coin.current_price} market_cap={coin.market_cap} total_volume={coin.total_volume} price_change={coin.price_change_percentage_24h} />
                )
            })}
        </div>
    )
}

export default Home;
