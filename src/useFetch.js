import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      const fetchBlogs = async () => {
        try {
          const res = await fetch(url, { signal: abortController.signal });
          if (!res.ok)
            throw Error("Could not fetch the data for that resource");
          const jsonRes = await res.json();
          setData(jsonRes);
          setLoading(false);
          setError(null);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(error.message);
            setLoading(false);
          }
        }
      };
      fetchBlogs();
    }, 500);
    return () => abortController.abort();
  }, [url]);
  return { data, isLoading, error };
};
