import { useEffect } from "react";
import NewsSlider from "../NewsSlider/NewsSlider";
import styles from "./News.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../../redux/slices/imagesSlice";

const News = ({ title }) => {
  const images = useSelector((state) => state.images.imageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <section
      className={styles.root}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h3>{title}</h3>
      <NewsSlider images={images} />
    </section>
  );
};
export default News;
