import Logo from "../assets/соти_final.svg";

const Loader = () => {
  return (
    <div className="preloader" id="loader">
      <div className="loader-image">
        <img alt="Loader..." src={Logo} />
      </div>
    </div>
  );
};

export default Loader;
