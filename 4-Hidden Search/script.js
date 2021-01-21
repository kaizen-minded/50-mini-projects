const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const search = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
  searchInput.focus();
});
