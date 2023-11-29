import styles from "./PhotoGalery.module.scss";
import { useState } from "react";
import useResize from "../../hooks/useResize";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const PhotoGalery = ({ images }) => {
  const [slides, setSlides] = useState(5);
  useResize(setSlides, "photo", null);
  return (
    <Splide
      options={{
        height: 150,
        type: "loop",
        focus: "center",
        drag: false,
        perPage: slides,
        gap: "5%",
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
