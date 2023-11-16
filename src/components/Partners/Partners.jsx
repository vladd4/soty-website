import styles from "./Partners.module.scss";
import PhotoGalery from "../PhotoGalery/PhotoGalery";
import { useSelector } from "react-redux";

const Partners = () => {
  const images = useSelector((state) => state.images.imageList);
  return (
    <section
      className={styles.root}
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <h3>наші партнери</h3>
      <PhotoGalery images={images} />
    </section>
  );
};
export default Partners;
