const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

const progressData = {
  index: 0,
  disableBtn() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    if (this.index === 0) {
      prevBtn.disabled = true;
    }
    if (this.index === 3) {
      nextBtn.disabled = true;
    }
  },
  updateBorders() {
    circles.forEach((circle) => circle.classList.remove("active"));
    for (let i = 0; i <= this.index; i++) {
      circles[i].classList.add("active");
    }
  },
  updateProgressBar() {
    progressBar.style.width = `${this.index * 33}%`;
  },
  updateProgressUI() {
    this.disableBtn();
    this.updateBorders();
    this.updateProgressBar();
  },
  prevBtn() {
    this.index--;
    this.updateProgressUI();
  },
  nextBtn() {
    this.index++;
    this.updateProgressUI();
  },
};

prevBtn.addEventListener("click", function () {
  progressData.prevBtn();
});

nextBtn.addEventListener("click", function () {
  progressData.nextBtn();
});
