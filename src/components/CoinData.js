import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CoinData.css';

const CoinData = (props) => {
    return (
        <div className="m-5 mt-5 p-2 rounded border row coin-data-ctnr">
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Market Cap</span>
                    <span>${props.market_cap}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Total Volume</span>
                    <span>${props.total_volume}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Current Price</span>
                    <span>${props.current_price}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">24H Change</span>
                    <span>{props.price_change_percentage_24h}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">24H Low</span>
                    <span>${props.low_24h}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">24H High</span>
                    <span>${props.high_24h}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Curculating Supply</span>
                    <span>{props.circulating_supply}</span>
                </div>
                <hr />
                <div className="d-flex flex-column">
                    <span className="text-muted coin-data-category">Total Supply</span>
                    {props.total_supply !== null ? (
                        <span>{props.total_supply}</span>
                    ) : (
                        <span>{props.circulating_supply}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CoinData;
