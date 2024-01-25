import axios from "axios";
const rapidApiKey = "f83a9602a4mshcb637c0bd8c2b41p1d593cjsn5102fc6a594c";

// fetch using get
const financeApiGetFetch = axios.create({
  method: "GET",
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
});

export const FetchData = async (endPoint, params) => {
  try {
    const response = await financeApiGetFetch.get(endPoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default financeApiGetFetch