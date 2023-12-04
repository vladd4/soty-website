import styles from "./Partners.module.scss";
import PhotoGalery from "../PhotoGalery/PhotoGalery";
import { useSelector } from "react-redux";
import { useContext } from "react";
import Context from "../../hooks/Context";

const Partners = () => {
  const images = useSelector((state) => state.images.imageList);
  const t = useContext(Context);
  return (
    <section
      className={styles.root}
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <h3>{t("partners_h")}</h3>
      <PhotoGalery images={images} />
    </section>
  );
};
export default Partners;
