export const showModal = () => {
  if (document.querySelector("#modal")) {
    document.querySelector("#modal").classList.add("show_modal");
  }
};
export const closeModal = (ref) => {
  if (ref.current) {
    ref.current.classList.remove("show_modal");
  }
};
