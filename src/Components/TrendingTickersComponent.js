import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FetchData } from '../Utils/FetchApi';
import { useDataContext } from '../Context/GlobalData';
// import { useDataContext }
const TrendingTickersComponent = () => {
 
  const {trendingTickers,loading}=useDataContext()
 
  return (
    <div className="ticker-container">
       <h2 className="hedaing-real"> Trending Tickers</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
         
          <ul className="ticker-list">
            {trendingTickers.map((ticker, index) => (
              <li className="ticker-item" key={index}>
                <div>
                  <span>{ticker.quoteType}</span>
                  <strong>{ticker.symbol}</strong> - {ticker.shortName}
                 
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