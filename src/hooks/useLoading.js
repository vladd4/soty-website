import { useState, useEffect } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await delay(2000);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading;
};

export default useLoading;
