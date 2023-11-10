import Additional from "../components/AdditionalInfo/Additional";
import Loader from "../components/Loader";
import { useEffect } from "react";
import useLoading from "../hooks/useLoading";

const Details = () => {
  const isLoading = useLoading();
  useEffect(() => {
    return () => {
      document.querySelector("#home-link").classList.remove("show_home");
    };
  }, []);
  return <>{isLoading ? <Loader /> : <Additional />}</>;
};
export default Details;
