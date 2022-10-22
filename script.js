const video = document.querySelector(".video-container");
const controlBtn = document.querySelector(".switch-btn");

controlBtn.addEventListener("click", () => {
  if (!controlBtn.classList.contains("play")) {
    controlBtn.classList.add("play");
    video.pause();
  } else {
    controlBtn.classList.remove("play");
    video.play();
  }
});
