// Endpoint1.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FetchData } from '../Utils/FetchApi';
// import "./stockdata.css"
import { useDataContext } from '../Context/GlobalData';



const StockData = () => {
  const {data,setData,loading}=useDataContext()

  return (
    <div className="market-section">
      <h2 className='hedaing-real'> Market Stock Data</h2>
      <table className="market-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change Percent</th>
            <th>Previous Close</th>
            <th>Open</th>
            <th>Day's Range</th>
            <th>Volume</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
        {loading ? (
  <p className='loading-indicator' style={{ textAlign:'center', fontSize:"1.5rem", textTransform:"uppercase", fontVariant:"small-caps"}}>Loading...</p>
) : (
  data.map((item, index) => (
    <tr key={index} className={item.regularMarketChangePercent > 0 ? 'positive' : 'negative'}>
      <td>{item.symbol || '-'}</td>
      <td>{item.shortName || '-'}</td>
      <td>${item.regularMarketPrice ? item.regularMarketPrice.toFixed(2) : '-'}</td>
      <td style={{ color: item.regularMarketChange > 0 ? 'green' : 'red' }}>
        {item.regularMarketChange ? item.regularMarketChange.toFixed(2) : '-'}
      </td>
      <td style={{ color: item.regularMarketChangePercent > 0 ? 'green' : 'red' }}>
        {item.regularMarketChangePercent ? `${item.regularMarketChangePercent.toFixed(2)}%` : '-'}
      </td>
      <td>${item.regularMarketPreviousClose ? item.regularMarketPreviousClose.toFixed(2) : '-'}</td>
      <td>${item.regularMarketOpen ? item.regularMarketOpen.toFixed(2) : '-'}</td>
      <td>{item.regularMarketDayRange || '-'}</td>
      <td>{item.regularMarketVolume || '-'}</td>
      <td>{item.region || '-'}</td>
    </tr>
  ))
)}

  </tbody>
      </table>
    </div>
  );
};

export default StockData;