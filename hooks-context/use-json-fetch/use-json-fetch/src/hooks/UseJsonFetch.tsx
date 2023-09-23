import { useEffect, useState } from "react";

export default function useJsonFetch(url: string, opts: string): any {
    const [data, setData] = useState({status: "?"});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      let abortController: AbortController;
      const stop = () => {
        if (abortController) {
          abortController.abort();
        }
      };
      const fetchData = async () => {
        try {
          stop();
  
          abortController = new AbortController();
  
          setLoading(true);
          setError(false);
  
          const response = await fetch(url, {
            signal: abortController.signal
          });
          if (!response.ok) {
            throw new Error("Ошибка сети");
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
  
      return () => {};
    }, [url]);
  
    return [ data, loading, error ];
  }
