import Additional from "../components/AdditionalInfo/Additional";
import { useEffect } from "react";

const Details = () => {
  useEffect(() => {
    return () => {
      document.querySelector("#home-link").classList.remove("show_home");
    };
  }, []);
  return (
    <>
      <Additional />
    </>
  );
};
export default Details;
