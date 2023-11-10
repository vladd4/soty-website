import Welcome from "../components/Welcome/Welcome";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, []);
  return <Welcome />;
};
export default Home;
