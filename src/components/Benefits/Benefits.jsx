import styles from "./Benefits.module.scss";

import useResize from "../../hooks/useResize";
import Context from "../../hooks/Context";

import { useContext } from "react";

import { useDispatch } from "react-redux";
import { setTitle, setInfo } from "../../redux/slices/popupSlice";

import MobileBlock from "./MobileBlock";
import DesktopBlock from "./DesktopBlock";

const Benefits = ({ polygon }) => {
  const dispatch = useDispatch();
  const isMobile = useResize(null);
  const t = useContext(Context);

  const handleHover = (title, info) => {
    if (document.querySelector("#popup"))
      document.querySelector("#popup").classList.add("show_popup");
    dispatch(setTitle(title));
    dispatch(setInfo(info));
  };

  const handleHoverRemove = () => {
    if (document.querySelector("#popup"))
      document.querySelector("#popup").classList.remove("show_popup");
  };
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        {isMobile ? (
          <MobileBlock t={t} />
        ) : (
          <DesktopBlock
            t={t}
            handleHover={handleHover}
            handleHoverRemove={handleHoverRemove}
            polygon={polygon}
          />
        )}
      </article>
    </section>
  );
};

export default Benefits;
