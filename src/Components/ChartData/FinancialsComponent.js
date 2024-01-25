import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import "./financialcomponets.css"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { FetchData } from '../../Utils/FetchApi';
import { useDataContext } from '../../Context/GlobalData';




const FinancialsComponent = () => {
const{financialsData, setFinancialsData,loading}=useDataContext()
  return (
   <>
   
    <div className="financials-container">
        
        {loading ? (
          <p className='loading-indicator' style={{ textAlign:'center', fontSize:"1.5rem", textTransform:"uppercase", fontVariant:"small-caps"}}>Loading...</p>
        ) : (
          <div className="chart-wrapper">
            <h2>Financial Data Chart</h2>
            <BarChart
              width={1000}
              height={600}
              data={financialsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date * 1000).toLocaleDateString('en-US')}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="close"
                name="Closing Price"
                fill="#8884d8"
              />
              <Bar
                dataKey="open"
                name="Opening Price"
                fill="#82ca9d"
              />
              <Bar
                dataKey="adjclose"
                name="Adjusted Closing Price"
                fill="#ffc658"
              />
              <Bar
                dataKey="high"
                name="High Price"
                fill="#ff7300"
              />
              <Bar
                dataKey="low"
                name="Low Price"
                fill="#0088fe"
              />
              <Bar
                dataKey="volume"
                name="Volume"
                fill="#00C49F"
              />
            </BarChart>
  
            
          </div>
        )}
      </div></>
  );
};

export default FinancialsComponent;