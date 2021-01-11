(function () {
  const panels = document.querySelectorAll(".panel");
  const expandCard = (e) => {
    panels.forEach((panel) => panel.classList.remove("active"));
    e.target.classList.add("active");
  };
  panels.forEach((panel) => {
    panel.addEventListener("click", expandCard);
  });
})();
