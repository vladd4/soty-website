import styles from "./Welcome.module.scss";

import WelcomeLink from "./WelcomeLink";

import Orange from "../../assets/Polygon-main-orange.png";
import BLue from "../../assets/Polygon-main-blue.png";
import Yellow from "../../assets/Polygon-main-yellow.png";

const LinkRow = ({ t }) => {
  return (
    <>
      <article className={styles.links_block_row}>
        <WelcomeLink
          href="/individual"
          image={Orange}
          title="individual_h"
          t={t}
        />
      </article>
      <article className={styles.links_block_row_2}>
        <WelcomeLink href="/remote" image={BLue} title="remote_h" t={t} />
        <WelcomeLink href="/storage" image={Yellow} title="storage_h" t={t} />
      </article>
    </>
  );
};

export default LinkRow;
