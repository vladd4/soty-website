import styles from "./Welcome.module.scss";

import { useContext, useRef } from "react";

import useResize from "../../hooks/useResize";
import Context from "../../hooks/Context";

import MobileBlock from "./MobileBlock";
import DesktopBlock from "./DesktopBlock";

const Welcome = () => {
  const t = useContext(Context);
  const ref = useRef(null);
  const isMobile = useResize(null, null, null);
  return (
    <section className={styles.root} ref={ref}>
      <article className={styles.wrapper}>
        {isMobile ? <MobileBlock t={t} /> : <DesktopBlock t={t} />}
      </article>
    </section>
  );
};
export default Welcome;
