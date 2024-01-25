import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FetchData } from '../../Utils/FetchApi';

const TrendingTickersComponent = () => {
  const [trendingTickers, setTrendingTickers] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const fetchTrendingTickers = async () => {
    try {
      const response = await FetchData('market/get-trending-tickers', {
        region: 'US'
      });

      setTrendingTickers(response.finance.result[0]?.quotes || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingTickers();
  }, []);



  return (
    <div className="ticker-container">
      
      {loading ? (
       <p className='loading-indicator' style={{ textAlign:'center', fontSize:"1.5rem", textTransform:"uppercase", fontVariant:"small-caps"}}>Loading...</p>
      ) : (
        <div>
          <h2>Trending Tickers</h2>
          <ul className="ticker-list">
            {trendingTickers.map((ticker, index) => (
              <li className="ticker-item" key={index}>
                <div>
                  <span>{ticker.quoteType}</span>
                  <strong>{ticker.symbol}</strong> - {ticker.shortName}
                  <br />
                  <span className="ticker-item-description">
                    {ticker.regularMarketPrice} USD
                  </span>
                </div>
                <div className="ticker-details">
                  <span>{ticker.regularMarketChangePercent.toFixed(2)}%</span>
                  <span>{ticker.typeDisp}</span>
                  <span>{ticker.market}</span>
                  <span>{ticker.quoteSourceName}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrendingTickersComponent;