import styles from "./AdminPanel.module.scss";
import Logo from "../../assets/logo.png";
import Gallery from "./Gallery";
import Partners from "./Partners";

import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const AdminPanel = () => {
  return (
    <section className={styles.root}>
      <div className={styles.log_block}>
        <p>Admin</p>
        <Link to="/">Вийти</Link>
      </div>
      <aside className={styles.aside}>
        <article className={styles.aside_wrapper}>
          <img alt="Logo" src={Logo} />
          <div className={styles.aside_links}>
            <Link to="photos">Фотогалерея</Link>
            <Link to="partners">Партнери</Link>
            <Link to="calc">Калькулятор</Link>
            <Link to="news">Новини</Link>
          </div>
        </article>
      </aside>
      <article className={styles.main_block}>
        {/* <Routes>
          <Route path="/photos" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
        </Routes> */}
      </article>
    </section>
  );
};
export default AdminPanel;
