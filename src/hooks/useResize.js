import { useEffect, useState } from "react";

const useResize = (setSlides, slider, calc) => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (setSlides !== null) {
        if (slider === "news") {
          if (windowWidth <= 450) {
            setSlides(1);
          } else if (windowWidth <= 650) {
            setSlides(2);
          } else if (windowWidth <= 900) {
            setSlides(3);
          } else {
            setSlides(4);
          }
        } else {
          if (windowWidth <= 450) {
            setSlides(2);
          } else if (windowWidth <= 650) {
            setSlides(3);
          } else if (windowWidth <= 900) {
            setSlides(4);
          } else {
            setSlides(5);
          }
        }
      } else if (calc !== null) {
        if (windowWidth <= 1000) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      } else {
        if (windowWidth <= 750) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calc, setSlides, slider]);
  return isMobile;
};
export default useResize;
