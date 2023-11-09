// import styles from "./AdminPanel.module.scss";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAddImage,
//   fetchDeleteImage,
//   fetchImages,
// } from "../../redux/slices/imagesSlice";

// const Partners = () => {
//   const images = useSelector((state) => state.images.imageList);
//   const dispatch = useDispatch();
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     dispatch(fetchImages());
//   }, []);
//   return (
//     <>
//       <h3>Партнери</h3>
//       <div className={styles.form_block}>
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button
//           onClick={() => {
//             dispatch(fetchAddImage(file));
//             setFile(null);
//           }}
//         >
//           Додати фото
//         </button>
//       </div>
//       <div className={styles.images_list}>
//         {images
//           ? images.map((image) => {
//               return (
//                 <div className={styles.image_list_item}>
//                   <div
//                     className={styles.image}
//                     style={{ backgroundImage: `url(${image})` }}
//                   ></div>
//                   <button onClick={() => dispatch(fetchDeleteImage(image))}>
//                     Видалити
//                   </button>
//                 </div>
//               );
//             })
//           : null}
//       </div>
//     </>
//   );
// };
// export default Partners;
