import styles from "./Welcome.module.scss";

import LinkRow from "./LinkRow";

import Sotu from "../../assets/Фото в сотах.png";

const DesktopBlock = ({ t }) => {
  return (
    <>
      <img
        alt="Welcome"
        src={Sotu}
        width="100%"
        height="100%"
        className={styles.image}
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <div
        className={styles.links_block}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <LinkRow t={t} />
      </div>
    </>
  );
};

export default DesktopBlock;
