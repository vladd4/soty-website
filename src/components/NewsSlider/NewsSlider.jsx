import styles from "./NewsSlider.module.scss";
import SliderImage from "../../assets/slider-img.png";
import Arrow from "../../assets/arrow.svg";
import ArrowHovered from "../../assets/arrow-hovered.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useRef, useState } from "react";
import useResize from "../../hooks/useResize";

const NewsSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const handleHover = (ref, src) => {
    if (ref.current) {
      ref.current.src = src;
    }
  };

  const handleClick = (side) => {
    if (sliderRef.current) {
      const splide = sliderRef.current.splide;
      splide.go(side);
    }
  };
  const [slides, setSlides] = useState(4);
  useResize(setSlides, "news");
  return (
    <>
      <Splide
        ref={sliderRef}
        options={{
          height: 300,
          type: "loop",
          focus: "center",
          drag: true,
          perPage: slides,
          gap: "3%",
          arrows: false,
        }}
        className={styles.slider}
      >
        {images
          ? images.map((image) => {
              return (
                <SplideSlide
                  key={image}
                  id="slides"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                  }}
                />
              );
            })
          : null}
      </Splide>
      <div className={styles.arrows}>
        <img
          ref={prevRef}
          alt="Prev"
          src={Arrow}
          className={styles.prev}
          onClick={() => handleClick("<")}
          onMouseOver={() => handleHover(prevRef, ArrowHovered)}
          onMouseOut={() => handleHover(prevRef, Arrow)}
        />
        <img
          ref={nextRef}
          alt="Next"
          src={Arrow}
          className={styles.next}
          onClick={() => handleClick(">")}
          onMouseOver={() => handleHover(nextRef, ArrowHovered)}
          onMouseOut={() => handleHover(nextRef, Arrow)}
        />
      </div>
    </>
  );
};
export default NewsSlider;
