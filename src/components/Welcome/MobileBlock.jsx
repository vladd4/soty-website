import styles from "./Welcome.module.scss";

import LinkRow from "./LinkRow";

const MobileBlock = ({ t }) => {
  return (
    <div
      className={styles.links_block}
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <LinkRow t={t} />
    </div>
  );
};

export default MobileBlock;
