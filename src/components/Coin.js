import React from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';


const Coin = (props) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
            <div className="coin hover-zoom">
                <Link className="coin-item hover-zoom" to={`/coins/${props.id}`}>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 rounded">
                        <img src={props.image} />
                        <p className="coin-name">{props.name}</p>
                        <p className="coin-symbol">{props.symbol}</p>
                        <div className="coin-data">
                            <p className="coin-price">${props.current_price.toLocaleString()} </p>
                            {/* <p className="coin-marketcap">${props.market_cap.toLocaleString()} </p> */}
                            {props.price_change < 0 ? (
                                <p className="coin-percent red">{props.price_change.toFixed(2)}</p>
                            ) : (
                                <p className="coin-percent green">{props.price_change.toFixed(2)}</p>
                            )}
                            {/* <p className="coin-volume">${props?.total_volume?.toLocaleString()}</p> */}
                        </div>
                    </li>
                </Link> 
                </div>
            </div>
        </div>
    )
}

export default Coin;
