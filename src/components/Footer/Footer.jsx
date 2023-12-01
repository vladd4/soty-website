import styles from "./Footer.module.scss";

import Logo from "../../assets/соти_final.svg";
import Instagram from "../../assets/instagram 1.png";
import Telegram from "../../assets/facebook 1.png";
import Map from "../../assets/point.svg";
import Phone from "../../assets/phone-icon.svg";
import Mail from "../../assets/mail-icon.svg";

import { useContext } from "react";
import Context from "../../hooks/Context";
import useResize from "../../hooks/useResize";
import { showModal } from "../../utils/showModal";

const Footer = () => {
  const t = useContext(Context);
  const isMobile = useResize(null, null, null);
  return (
    <footer className={styles.root}>
      <section
        className={styles.wrapper}
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <article className={styles.logo_block}>
          <img alt="Logo" src={Logo} width="100%" height="auto" />
          <div className={styles.social_block}>
            <a
              href="https://www.facebook.com/people/Leader-company/61553362610336/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Instagram" src={Instagram} width="100%" height="100%" />
            </a>
            <a
              href="https://www.facebook.com/people/Leader-company/61553362610336/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Telegram" src={Telegram} width="100%" height="100%" />
            </a>
          </div>
        </article>
        <article className={styles.info_block}>
          <div className={styles.info}>
            <div className={styles.info_wrapper}>
              <h3>{t("footer_contacts_h")}</h3>
              <a
                href="https://maps.app.goo.gl/M4MpJLJrim7oRBW9A"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="Map" src={Map} width="10%" height="100%" />
                <p>{t("location")}</p>
              </a>
              <a
                href="https://www.facebook.com/people/Leader-company/61553362610336/"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="Phone" src={Phone} width="10%" height="100%" />
                <p>+38(097)-746-37-48</p>
              </a>
              <a
                href="https://www.facebook.com/people/Leader-company/61553362610336/"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="Mail" src={Mail} width="10%" height="100%" />
                <p>sotusotu@gmail.com</p>
              </a>
            </div>
            {isMobile ? (
              <div className={styles.info_wrapper_1}>
                <div>
                  <h3>Графік роботи складу та офісу:</h3>
                  <p>{t("footer_graph_p_1")}</p>
                </div>
              </div>
            ) : (
              <div className={styles.info_wrapper_1}>
                <div>
                  <h3>{t("footer_graph_h_1")}</h3>
                  <p>{t("footer_graph_p_1")}</p>
                </div>
                <div>
                  <h3>{t("footer_graph_h_2")}</h3>
                  <p>{t("footer_graph_p_2")}</p>
                </div>
              </div>
            )}
            <div className={styles.mobile_div}>
              <div className={styles.mobile_div_wrapper}>
                <a
                  href="https://maps.app.goo.gl/M4MpJLJrim7oRBW9A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="Map" src={Map} width="auto" height="100%" />
                  <p>{t("location")}</p>
                </a>
                <a
                  href="https://www.facebook.com/people/Leader-company/61553362610336/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="Phone" src={Phone} width="auto" height="100%" />
                  <p>+38(097)-746-37-48</p>
                </a>
                <a
                  href="https://www.facebook.com/people/Leader-company/61553362610336/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="Mail" src={Mail} width="auto" height="100%" />
                  <p>sotusotu@gmail.com</p>
                </a>
              </div>
              <div className={styles.mobile_social_block}>
                <a
                  href="https://www.facebook.com/people/Leader-company/61553362610336/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Instagram"
                    src={Instagram}
                    width="100%"
                    height="100%"
                  />
                </a>
                <a
                  href="https://www.facebook.com/people/Leader-company/61553362610336/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Telegram"
                    src={Telegram}
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={showModal}>
            {t("footer_btn")}
          </button>
        </article>
        <iframe
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.7887874213225!2d24.07206766473281!3d49.79884647018445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae81672a01b9b%3A0x3d34454888495b9c!2z0LLRg9C70LjRhtGPINCX0LXQu9C10L3QsCwgMzAxLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1suk!2sua!4v1699437551326!5m2!1suk!2sua"
          className={styles.map}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      <p
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-duration="1500"
        className={styles.copy}
      >
        {t("footer_copy")}
      </p>
    </footer>
  );
};

export default Footer;
