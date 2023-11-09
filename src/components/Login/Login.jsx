import styles from "./Login.module.scss";

const Login = () => {
  return (
    <article className={styles.root}>
      <h3>Логін</h3>
      <input type="text" placeholder="Введіть логін" />
      <input type="password" placeholder="Введіть пароль" />
      <button>Підтвердити</button>
    </article>
  );
};
export default Login;
