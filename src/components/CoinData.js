import React from 'react'

const CoinData = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.symbol}</p>
            <img src={props.image} />
            <p>{props.current_price}</p>
        </div>
    )
}

export default CoinData;
