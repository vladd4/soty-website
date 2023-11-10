import Logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="preloader" id="loader">
      <div className="preloader__row">
        <div className="preloader__item">
          <img alt="Loader..." src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
