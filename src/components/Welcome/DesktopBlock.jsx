import styles from "./Welcome.module.scss";

import LinkRow from "./LinkRow";

import Sotu from "../../assets/welcome.png";

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
        data-aos-duration="1500"
      />
      <div
        className={styles.links_block}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <LinkRow t={t} />
      </div>
    </>
  );
};

export default DesktopBlock;
