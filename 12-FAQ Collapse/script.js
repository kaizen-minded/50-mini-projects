const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentNode.classList.toggle("active");
  });
});
