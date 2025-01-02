import Welcome from "../components/Welcome/Welcome";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import AboutUs from "../components/AboutUs/About";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/slices/imagesSlice";
import { useEffect } from "react";

const Home = () => {
  const images = useSelector((state) => state.images.imageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
