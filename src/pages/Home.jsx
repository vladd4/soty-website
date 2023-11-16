import Welcome from "../components/Welcome/Welcome";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import AboutUs from "../components/AboutUs/About";

const Home = () => {
  return (
    <>
      <Welcome />
      <AboutUs />
      <News title="фотогалерея" />
      <Partners />
      <News title="новини" />
    </>
  );
};
export default Home;
