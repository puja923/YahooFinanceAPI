import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
 import NewsList from "./Components/NewsList";


import TrendingTickersComponent from "./Components/TrendingTickersComponent";
import FinancialsComponent from "./Components/ChartData/FinancialsComponent";
import { DataProvider } from "./Context/GlobalData";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
        <DataProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsList />} />
           

            <Route path="/tickets" element={<TrendingTickersComponent />} />
            <Route path="/finacial" element={<FinancialsComponent />} />
          </Routes>
        </DataProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;