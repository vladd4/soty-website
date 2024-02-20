import styles from "./Benefits.module.scss";

import { icons } from "../../static_store/benefits_icons";

const MobileBlock = ({ t }) => {
  return (
    <article className={styles.mobile_block}>
      {icons.map((icon) => {
        return (
          <div
            key={icon}
            className={styles.mobile_one_polygon}
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <div className={styles.mobile_polygon_text}>
              <img alt="Icon" src={icon.icon} width="100%" height="100%" />
              <p>{t(icon.text)}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default MobileBlock;
