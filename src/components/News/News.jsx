import styles from "./News.module.scss";

import { useContext, useEffect } from "react";

import NewsSlider from "../NewsSlider/NewsSlider";

import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../../redux/slices/imagesSlice";

import Context from "../../hooks/Context";

const News = ({ title }) => {
  const images = useSelector((state) => state.images.imageList);
  const dispatch = useDispatch();
  const t = useContext(Context);

  useEffect(() => {
    dispatch(fetchImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={styles.root}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h3>{t(title)}</h3>
      <NewsSlider images={images} />
    </section>
  );
};
export default News;
