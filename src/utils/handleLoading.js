export const handleLoading = () =>
  setTimeout(
    function () {
      document.body.classList.remove("loaded");
      document.body.classList.add("loaded_hiding");
      window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
      }, 500);
    },
    [500]
  );
