import styles from "./Allowed.module.scss";

import Toys from "../../assets/h.svg";
import Clothes from "../../assets/allowed/clothes-icon.svg";
import Tyres from "../../assets/allowed/tire-icon.svg";
import Mebli from "../../assets/allowed/furniture-icon.svg";
import Sport from "../../assets/allowed/sport-equipment-icon.svg";
import Tech from "../../assets/allowed/office-equipment.svg";
import Docs from "../../assets/allowed/documents-icon.svg";
import Other from "../../assets/allowed/tools-icon.svg";

import { useContext } from "react";
import Context from "../../hooks/Context";

import { useDispatch } from "react-redux";
import { setTitle, setInfo, setIcon } from "../../redux/slices/additionalSlice";

import AllowedLink from "./AllowedLink";

const Allowed = ({ polygon }) => {
  const t = useContext(Context);
  const dispatch = useDispatch();

  const handleCLick = (title, info, icon) => {
    window.scrollTo(0, 0);
    document.querySelector("#home-link").classList.add("show_home");
    dispatch(setTitle(title));
    dispatch(setInfo(info));
    dispatch(setIcon(icon));
  };
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          {t("all_item_first")} <b>{t("all_item_H")}</b> {t("all_item_last")}
        </h3>
        <article className={styles.image_block}>
          <article className={styles.article_one}>
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_tech", "ind_all_tech_p", Toys)
              }
              label="ind_all_tech"
              icon={Toys}
              polygon={polygon}
              t={t}
            />
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_clothes", "ind_all_clothes_p", Clothes)
              }
              label="ind_all_clothes"
              icon={Clothes}
              polygon={polygon}
              t={t}
            />
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_tyres", "ind_all_tyres_p", Tyres)
              }
              label="ind_all_tyres"
              icon={Tyres}
              polygon={polygon}
              t={t}
            />
          </article>
          <article className={styles.article_two}>
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_mebli", "ind_all_mebli_p", Mebli)
              }
              label="ind_all_mebli"
              icon={Mebli}
              polygon={polygon}
              t={t}
            />
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_sport", "ind_all_sport_p", Sport)
              }
              label="ind_all_sport"
              icon={Sport}
              polygon={polygon}
              t={t}
            />
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_offTech", "ind_all_offTech_p", Tech)
              }
              label="ind_all_offTech"
              icon={Tech}
              polygon={polygon}
              t={t}
            />
          </article>
          <article className={styles.article_three}>
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_docs", "ind_all_docs_p", Docs)
              }
              label="ind_all_docs"
              icon={Docs}
              polygon={polygon}
              t={t}
            />
            <AllowedLink
              clickHandler={() =>
                handleCLick("ind_all_other", "ind_all_other_p", Other)
              }
              label="ind_all_other"
              icon={Other}
              polygon={polygon}
              t={t}
            />
          </article>
        </article>
      </article>
    </section>
  );
};
export default Allowed;
