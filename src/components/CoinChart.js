import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';
import { chartOptions } from '../chartConfig/chartConfig';
import './CoinChart.css';
import './Coin.css';

const CoinChart = ({ data, name, current_price }) => {
    const chartRef = useRef();
    const { day, price_change_24h, week, price_change_7d, year, price_change_1y } = data;
    const [timeFormat, setTimeFormat] = useState('24h');

    const determineTimeFormat = () => {
        switch (timeFormat) {
            case "24h":
                return day;
            case "7d":
                return week;
            case "365d":
                return year;
            default:
                return day;
        }
    }

    const determineTime = () => {
        switch (timeFormat) {
            case "24h":
                return price_change_24h;
            case "7d":
                return price_change_7d;
            case "365d":
                return price_change_1y;
            default:
                return price_change_24h;
        }
    }

    useEffect(() => {
        if(window.chartInstance && window.chartInstance !== null) {
            window.chartInstance.destroy();
        }
        if (chartRef && chartRef.current) {
            window.chartInstance = new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `${name} price`,
                        data: determineTimeFormat(),
                        backgroundColor: "rgba(233, 128, 116, 0.5)",
                        borderColor: "rgba(232, 90, 79, 0.4)",
                        pointRadius: 0,
                    }],
                },
                options: {
                    ...chartOptions,
                }
            });
        }
        window.chartInstance.update();
    });

    return (
        <div className="chart-ctnr border mt-2 rounded p-3">
            <h1 className="titles">{name}</h1>
            {determineTime() < 0 ? (
                <h3 className="titles">{current_price} <span className="red">({determineTime()}%)</span></h3>
            ) : (
                <h3 className="titles">{current_price} <span className="green">({determineTime()}%)</span></h3>
            )}
            <div className="chart-ctnr">
                <canvas ref={chartRef} id='coin-chart' width={800} height={250}></canvas>
            </div>
            <div className="chart-button mt-1">
                <button onClick={() => setTimeFormat('24h')} className="bt btn btn-outline-secondary btn-sm">Day</button>
                <button onClick={() => setTimeFormat('7d')} className="bt btn btn-outline-secondary btn-sm mx-1">Week</button>
                <button onClick={() => setTimeFormat('365d')} className="bt btn btn-outline-secondary btn-sm">Year</button>
            </div>
        </div>
    )
}

export default CoinChart;
