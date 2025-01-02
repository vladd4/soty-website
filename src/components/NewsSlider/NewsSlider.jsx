import styles from "./NewsSlider.module.scss";

import Arrow from "../../assets/arrow.svg";
import ArrowHovered from "../../assets/arrow-hovered.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useRef, useState } from "react";
import useResize from "../../hooks/useResize";

import No_Image from "../../assets/no_image.jpg";

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

  useResize(setSlides, "news", null);

  return (
    <>
      <Splide
        ref={sliderRef}
        options={{
          height: 300,
          focus: "center",
          drag: true,
          perPage: slides,
          gap: "3%",
          arrows: false,
          pagination: false,
        }}
        className={styles.slider}
      >
        {images ? (
          images.map((image) => {
            return (
              <SplideSlide
                data-fancybox="gallery"
                href={image}
                key={image}
                className={styles.splide_slide}
                id="slides"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              />
            );
          })
        ) : (
          <SplideSlide
            id="slides"
            className={styles.splide_slide}
            style={{
              backgroundImage: `url(${No_Image})`,
              backgroundSize: "cover",
            }}
          />
        )}
      </Splide>
      <div className={styles.arrows}>
        <img
          ref={prevRef}
          alt="Prev"
          width="100%"
          height="100%"
          src={Arrow}
          className={styles.prev}
          onClick={() => handleClick("<")}
          onMouseOver={() => handleHover(prevRef, ArrowHovered)}
          onMouseOut={() => handleHover(prevRef, Arrow)}
        />
        <img
          ref={nextRef}
          alt="Next"
          width="100%"
          height="100%"
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
