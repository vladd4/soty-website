import styles from "./Welcome.module.scss";

import WelcomeLink from "./WelcomeLink";

import Orange from "../../assets/Polygon-main-orange.png";
import BLue from "../../assets/Polygon-main-blue.png";
import Yellow from "../../assets/Polygon-main-yellow.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIsActive } from "../../redux/slices/calcSlice";

const LinkRow = ({ t }) => {
  const { isActiveIndividual, isActiveRemote, isActiveStorage } = useSelector(
    (state) => state.calculator
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsActive());
  }, [dispatch]);

  console.log(isActiveIndividual, isActiveRemote, isActiveStorage);

  return (
    <>
      <article className={styles.links_block_row}>
        <WelcomeLink
          href="/individual"
          image={Orange}
          title="individual_h"
          t={t}
          isDisabled={!isActiveIndividual}
        />
      </article>
      <article className={styles.links_block_row_2}>
        <WelcomeLink
          href="/remote"
          image={BLue}
          title="remote_h"
          t={t}
          isDisabled={!isActiveRemote}
        />
        <WelcomeLink
          href="/storage"
          image={Yellow}
          title="storage_h"
          t={t}
          isDisabled={!isActiveStorage}
        />
      </article>
    </>
  );
};

export default LinkRow;
