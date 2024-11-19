import styles from "./PhotoGalery.module.scss";

import { useState } from "react";

import useResize from "../../hooks/useResize";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const PhotoGalery = ({ images }) => {
  const [slides, setSlides] = useState(4);
  useResize(setSlides, "photo", null);
  return (
    <Splide
      options={{
        height: 200,
        type: "loop",
        focus: "center",
        drag: false,
        perPage: slides,
        gap: "3%",
        autoplay: true,
        interval: 1500,
        pagination: false,
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
  );
};
export default PhotoGalery;
