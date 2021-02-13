import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import coingecko from '../apis/coingecko_api';
import CoinChart from '../components/CoinChart';
import CoinData from '../components/CoinData';

const CoinPage = () => {
    const [coin, setCoin] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        coingecko.get('https://api.coingecko.com/api/v3/coins/' + params.id)
        .then(response => {
        setCoin(response.data)
        })
        .catch(error => console.log(error));
    }, []);

    const renderData = () => {
        return (
            <div className="coinList">
                <CoinChart />
                <CoinData key={coin.id} 
                    name={coin.name} 
                    symbol={coin.symbol} 
                    image={coin?.image?.small}
                    current_price={coin?.market_data?.current_price?.cad.toLocaleString()} />
            </div>
        )
    }

    return renderData();
    // return (
        // <div>
            {/* <p>{coin.name}</p>
            <p>{coin.symbol}</p>
            <img src={coin?.image?.small} />
            <p>${coin?.market_data?.current_price?.cad.toLocaleString()}</p> */}
        {/* </div>
    ) */}
}

export default CoinPage;
