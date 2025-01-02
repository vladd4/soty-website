import styles from "./News.module.scss";

import { useContext } from "react";

import NewsSlider from "../NewsSlider/NewsSlider";

import Context from "../../hooks/Context";
import { useSelector } from "react-redux";

const News = ({ title, images }) => {
  const t = useContext(Context);
  const isLoading = useSelector((state) => state.images.loading);

  return (
    <section
      className={styles.root}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h3>{t(title)}</h3>
      {!isLoading && <NewsSlider images={images} />}
    </section>
  );
};
export default News;
