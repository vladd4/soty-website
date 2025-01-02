import Welcome from "../components/Welcome/Welcome";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import AboutUs from "../components/AboutUs/About";
import { useSelector } from "react-redux";

const Home = () => {
  const images = useSelector((state) => state.images.imageList);

  return (
    <>
      <Welcome />
      <AboutUs />
      <News title="photo_h" images={images} />
      <Partners />
    </>
  );
};
export default Home;
