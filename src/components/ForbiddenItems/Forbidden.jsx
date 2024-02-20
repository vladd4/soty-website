import styles from "./Forbidden.module.scss";

import Prod from "../../assets/prohibited/food-icon.svg";
import Ros from "../../assets/prohibited/plant-icon.svg";
import Weapon from "../../assets/prohibited/gun-icon.svg";
import Ball from "../../assets/prohibited/gas-icon.svg";
import Fuel from "../../assets/petrol-icon.svg";
import Tocs from "../../assets/prohibited/toxic-icon.svg";
import Smell from "../../assets/prohibited/scent-icon.svg";
import Other from "../../assets/prohibited/animal-icon.svg";

import { useContext } from "react";

import Context from "../../hooks/Context";

import ItemsContainer from "./ItemsContainer";

const Forbidden = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          {t("all_item_first")} <b>{t("fob_item_H")}</b> {t("all_item_last")}
        </h3>
        <article className={styles.image_block}>
          <article className={styles.article_three}>
            <ItemsContainer image={Prod} title="ind_fob_prod" t={t} />
            <ItemsContainer image={Ros} title="ind_fob_ros" t={t} />
          </article>
          <article className={styles.article_two}>
            <ItemsContainer image={Weapon} title="ind_fob_weapon" t={t} />
            <ItemsContainer image={Ball} title="ind_fob_ball" t={t} />
            <ItemsContainer image={Fuel} title="ind_fob_fuel" t={t} />
          </article>
          <article className={styles.article_one}>
            <ItemsContainer image={Tocs} title="ind_fob_tocs" t={t} />
            <ItemsContainer image={Other} title="ind_fob_pets" t={t} />
            <ItemsContainer image={Smell} title="ind_fob_smell" t={t} />
          </article>
        </article>
      </article>
    </section>
  );
};
export default Forbidden;
