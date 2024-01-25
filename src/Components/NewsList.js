// NewsList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FetchData } from "../Utils/FetchApi";
// import "./Newslist.css";
import "./NewsList.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/GlobalData";

const NewsList = () => {
  const {news,loading}=useDataContext()
 
  const [visibleItems, setVisibleItems] = useState(12);

 

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
  };

  return (
    <div className="news-container">
      <h2 className="hedaing-real"> Market Stock Data</h2>
      {loading ? (
       <p className='loading-indicator' style={{ textAlign:'center', fontSize:"1.5rem", textTransform:"uppercase", fontVariant:"small-caps"}}>Loading...</p>
      ) : (
        <div className="news-divide">
          {news.slice(0, visibleItems).map((item) => (
            <div key={item.uuid} className="news-item">
              {item.main_image && (
                <img
                  src={item.main_image.original_url}
                  alt={item.title}
                  className="news-image"
                />
              )}
              <h2>{item.title.slice(0, 100)}</h2>
              <p>{item.summary.slice(0, 100)}</p>
              <Link  className="">
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}

      {news.length > visibleItems && (
       <div style={{textAlign:"center"}}>
        <button className="show-more" onClick={handleShowMore}>Show More</button>
       </div>
      )}
    </div>
  );
};

export default NewsList;