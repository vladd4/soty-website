import { X } from "lucide-react";
import styles from "./ImageViewer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentImage,
  setShowImageViewer,
} from "../../redux/slices/imageViewerSlice";

export default function ImageViewer() {
  const { showImageViewer, currentImage } = useSelector(
    (state) => state.imageViewer
  );

  const dispatch = useDispatch();

  const handleCloseViewer = () => {
    dispatch(setCurrentImage(null));
    dispatch(setShowImageViewer(false));
  };

  if (!currentImage) return null;

  return (
    <div
      className={`${styles.root} ${showImageViewer ? styles.show : ""}`}
      onClick={handleCloseViewer}
    >
      <X className={styles.close} size={30} onClick={handleCloseViewer} />
      <div className={styles.wrapper}>
        <img alt="Viewer" src={currentImage} width={300} height={200} />
      </div>
    </div>
  );
}
