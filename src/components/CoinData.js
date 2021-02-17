import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CoinData.css';

const CoinData = (props) => {

    return (
        <div className="m-5 mt-5 p-2 rounded row coin-data-ctnr">
            <div className='coin-inner'>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="coin-data-category">Market Cap</span>
                    <span>${props.market_cap}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="coin-data-category">Total Volume</span>
                    <span>${props.total_volume}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="coin-data-category">Current Price</span>
                    <span>${props.current_price}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="coin-data-category">24H Change</span>
                    <span>{props.price_change_percentage_24h}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="coin-data-category">24H Low</span>
                    <span>${props.low_24h}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="coin-data-category">24H High</span>
                    <span>${props.high_24h}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="coin-data-category">Curculating Supply</span>
                    <span>{props.circulating_supply}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="coin-data-category">Total Supply</span>
                    {props.total_supply !== null ? (
                        <span>{props.total_supply}</span>
                    ) : (
                        <span>{props.circulating_supply}</span>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
        {/* <div className="m-5 mt-5 p-2 rounded justify-content-center row coin-mobile-data-ctnr">
            <div className='coin-inner'>
                <ul>
                    <li className="coin-data-category">Current Price</li>
                    <li className="coin-data-category">24H Change</li>
                    <li className="coin-data-category">24H Low</li>
                    <li className="coin-data-category">24H High</li>
                    <li className="coin-data-category">Market Cap</li>
                    <li className="coin-data-category">Total Volume</li>
                    <li className="coin-data-category">Circulating Supply</li>
                    <li className="coin-data-category">Total Supply</li>
                    <li>${props.current_price}</li>
                    <li>${props.price_change_percentage_24h}</li>
                    <li>${props.low_24h}</li>
                    <li>${props.high_24h}</li>
                    <li>${props.market_cap}</li>
                    <li>${props.total_volume}</li>
                    <li>${props.circulating_supply}</li>
                    {props.total_supply !== null ? (
                    <li>{props.total_supply}</li>
                ) : (
                    <li>{props.circulating_supply}</li>
                )}
                </ul>
            </div>
        </div> */}
    // )
}

export default CoinData;
