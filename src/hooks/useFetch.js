import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // state for data change
  const [data, setData] = useState(null);

  //   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect hook to manage infinite fetch requests
  useEffect(() => {
    const controller = new AbortController();

    // async function to fetch the data
    const fetchData = async () => {
      //   setIsLoading(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        //   setIsLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          //   setIsLoading(false);
          setError("Could not fetch the data");
          console.log(err.message);
        }
      }
    };

    // call/invoke the function
    fetchData();

    // cleanup function
    return () => {
      controller.abort();
    };
  }, [url]);

  // return the data and the error, which is to be passed to the App.js
  return { data, error };
};
