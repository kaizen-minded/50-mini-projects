const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
const timeID = setInterval(() => {
  load++;
  updateUI(load);
  if (load > 99) {
    clearInterval(timeID);
  }
}, 30);

const updateUI = (progress) => {
  loadingText.textContent = `${progress}%`;
  loadingText.style.opacity = `${1 - progress / 100}`;
  bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
