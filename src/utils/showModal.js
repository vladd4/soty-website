export const showModal = () => {
  if (document.querySelector("#modal")) {
    document.querySelector("#modal").classList.add("show_modal");
  }
  if (document.querySelector("#overflow")) {
    document.querySelector("#overflow").classList.add("show_overflow");
  }
};
export const closeModal = (ref) => {
  if (ref.current) {
    ref.current.classList.remove("show_modal");
  }
  if (document.querySelector("#overflow")) {
    document.querySelector("#overflow").classList.remove("show_overflow");
  }
};
