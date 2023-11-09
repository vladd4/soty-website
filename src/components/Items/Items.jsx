import Allowed from "../AllowedItems/Allowed";
import Forbidden from "../ForbiddenItems/Forbidden";
import styles from "./Items.module.scss";

const Items = ({ polygon }) => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <Allowed polygon={polygon} />
        <Forbidden />
      </article>
    </section>
  );
};
export default Items;
