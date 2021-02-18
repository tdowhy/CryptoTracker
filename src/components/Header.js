import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { FiDollarSign } from "react-icons/fi";

const CoinNav = () => {
    return (
        <div className="m-2 mt-2 rounded header">
            <div>
                <span>
                <a href="/">
                <FiDollarSign size={30} className="home-logo" />
                </a>
                </span>
                <span className="site-title">Crypto Tracker</span>
            </div>
        </div>
    )
}

export default CoinNav;
