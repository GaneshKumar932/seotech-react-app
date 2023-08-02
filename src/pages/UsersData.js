import axios from 'axios';
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
   const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response?.data?.data);
            
          } catch (error) {
            console.log("Error:", error);
          }
    };
    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;


 

