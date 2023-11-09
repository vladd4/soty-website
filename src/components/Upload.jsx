import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/slices/imagesSlice";

const Upload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const imageList = useSelector((state) => state.images.imageList);
  const status = useSelector((state) => state.images.status);
  const uploadImage = () => {
    if (file) {
      const imageRef = ref(storage, `images/${v4()}`);
      uploadBytes(imageRef, file).then(() => {
        alert("image uploaded!");
      });
    } else return;
  };
  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
      <button onClick={uploadImage}>Upload</button>
      {status === "loading" ? (
        <h1>Loading...</h1>
      ) : imageList ? (
        imageList.map((image) => {
          return <img src={image} />;
        })
      ) : null}
    </div>
  );
};
export default Upload;
