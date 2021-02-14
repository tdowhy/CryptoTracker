import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import coingecko from '../apis/coingecko_api';
import CoinChart from '../components/CoinChart';
import CoinData from '../components/CoinData';

const CoinPage = () => {
    const [coin, setCoin] = useState([]);
    const [histData, setHistData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    
    const formatData = data => {
        return data.map(d => {
            return {
                t: d[0],
                y: d[1].toFixed(2),
            }
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [coinData, coinDay, coinWeek, coinYear] = await Promise.all([
                coingecko.get('/coins/' + params.id),
                coingecko.get('/coins/'+params.id+'/market_chart', {
                    params: {
                        vs_currency: 'cad',
                        days: "1",
                    },
                }),
                coingecko.get('/coins/'+params.id+'/market_chart', {
                    params: {
                        vs_currency: 'cad',
                        days: "7",
                    },
                }),
                coingecko.get('/coins/'+params.id+'/market_chart', {
                    params: {
                        vs_currency: 'cad',
                        days: "365",
                    },
                }),
            ]);
            setCoin(coinData.data);
            setHistData({
                day: formatData(coinDay?.data?.prices),
                price_change_24h: coinData?.data?.market_data?.price_change_percentage_24h,
                week: formatData(coinWeek?.data?.prices),
                price_change_7d: coinData?.data?.market_data?.price_change_percentage_7d,
                year: formatData(coinYear?.data?.prices),
                price_change_1y: coinData?.data?.market_data?.price_change_percentage_1y,
            });
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const renderData = () => {
        if (isLoading) {
            <div>Loading...</div>
        }
        return (
            <div className="coin-list">
                <CoinChart data={histData} 
                    name={coin.name} 
                    current_price={coin?.market_data?.current_price?.cad.toLocaleString()} />
                <CoinData key={coin.id} 
                    circulating_supply={coin?.market_data?.circulating_supply.toLocaleString()}
                    total_supply={coin?.market_data?.total_supply}
                    price_change_percentage_24h={coin?.market_data?.price_change_percentage_24h}
                    low_24h={coin?.market_data?.low_24h?.cad.toLocaleString()}
                    high_24h={coin?.market_data?.high_24h?.cad.toLocaleString()}
                    total_volume={coin?.market_data?.total_volume?.cad.toLocaleString()} 
                    market_cap={coin?.market_data?.market_cap?.cad.toLocaleString()}
                    current_price={coin?.market_data?.current_price?.cad.toLocaleString()} />
            </div>
        )
    }

    return renderData();
}

export default CoinPage;
