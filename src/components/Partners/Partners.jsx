import styles from "./Partners.module.scss";

import PhotoGalery from "../PhotoGalery/PhotoGalery";

import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";

import Context from "../../hooks/Context";
import { fetchPartners } from "../../redux/slices/partnersSlice";

const Partners = () => {
  const images = useSelector((state) => state.partners.partnersList);
  const t = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);
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
