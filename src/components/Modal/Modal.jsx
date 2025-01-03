import styles from "./Modal.module.scss";

import Polygon from "../../assets/modal-polygon.png";
import Close from "../../assets/close.svg";

import { useContext, useRef, useState } from "react";
import Context from "../../hooks/Context";

import { sendFormToTelegram } from "../../utils/sendTelegram";

import { useSelector, useDispatch } from "react-redux";
import { resetData } from "../../redux/slices/modalSlice";

import { closeModal } from "../../utils/showModal";
import toast from "react-hot-toast";

const Modal = () => {
  const ref = useRef(null);
  const t = useContext(Context);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [post, setPost] = useState("");

  const { size, termin, type, price } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "" || tel.trim() === "") {
      toast.error("Заповніть, будь-ласка, необхідні поля!");
      return;
    }
    let string;
    size
      ? (string = `Проект: Соти \nІм'я: ${name} \nНомер телефону: ${tel} \nE-mail: ${post} \nТип складу: ${type} \nРозмір: ${size}  \nТермін: ${termin} \nЦіна: ${price} грн\n`)
      : (string = `Проект: Соти \nІм'я: ${name} \nНомер телефону: ${tel} \nE-mail: ${post} \n`);
    sendFormToTelegram(string);
    setName("");
    setTel("");
    setPost("");
    dispatch(resetData());
    closeModal(ref);
  };
  return (
    <>
      <section ref={ref} className={styles.root} id="modal">
        <article className={styles.wrapper}>
          <img
            alt="Close"
            src={Close}
            className={styles.span}
            onClick={() => closeModal(ref)}
          />
          <img alt="Polygon" src={Polygon} className={styles.polygon} />
          <h3>{t("modal_p")}</h3>
          <div className={styles.form_block}>
            <input
              type="text"
              required
              placeholder={t("modal_name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder={t("modal_phone")}
              value={tel}
              onChange={(e) => setTel(e.target.value.replace(/\D/g, ""))}
            />
            <input
              type="mail"
              placeholder={t("modal_post")}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <button onClick={(e) => handleClick(e)}>{t("order_calc")}</button>
        </article>
      </section>
      <div
        className={styles.overflow}
        id="overflow"
        onClick={() => closeModal(ref)}
      />
    </>
  );
};
export default Modal;
