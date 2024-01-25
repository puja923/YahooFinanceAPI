import { createContext, useContext, useEffect, useState } from "react";
import { FetchData } from "../Utils/FetchApi";
const DataContext=createContext();

export const useDataContext=()=>{
    return useContext(DataContext)
}

export  const DataProvider=({children})=>{
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [trendingTickers, setTrendingTickers] = useState([]);
    const [financialsData, setFinancialsData] = useState([]);



    useEffect(() => {

        // stockData
        const fetchData = async () => {
          try {
            const response = await FetchData('market/v2/get-quotes', {
              region: 'US',
              symbols: 'AAPL,MSFT,GOOGL,AMZN,FB,TSLA,NFLX,INTC,CSCO,AMD',
            });
    
            if (response.quoteResponse && response.quoteResponse.result) {
              setData(response.quoteResponse.result);
            } else {
              console.error('Invalid API response format:', response);
            }
          } catch (error) {
            console.error('Error fetching data:');
          }
        };

        // newsData

        const fetchNewsData = async () => {
            try {
              const response = await FetchData("news/list", {
                category: "generalnews",
                region: "US",
              });
              setNews(response.items.result);
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
          };


          // finacial data

          const fetchFinacialData = async () => {
            try {
              const response = await FetchData('stock/v3/get-historical-data', {
                symbol: 'AMRN',
                region: 'US',
              });
      
              console.log(response.prices); 
              setFinancialsData(response.prices || []); 
             
            } finally {
              setLoading(false);
            }
          };


    //trendingtickets
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
    
        fetchData();
        fetchNewsData();
        fetchFinacialData();
        fetchTrendingTickers();
      }, []);





    
      const values={
        data,setData,news,loading,financialsData,trendingTickers
      }

      return <DataContext.Provider value={values}>
        {children}
      </DataContext.Provider>
}