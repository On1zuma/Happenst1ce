// Get the play button and video container elements
const playButton = document.getElementById("videoButton");
const videoContainer = document.querySelector(".video");
const video = document.querySelector("video");
const closeVideo = document.querySelector(".closevideo");

playButton.addEventListener("click", () => {
  videoContainer.classList.add("active");
  video.load();
  video.play();
});

videoContainer.addEventListener("click", (event) => {
  if (event.target === closeVideo || !event.target.closest("video")) {
    videoContainer.classList.remove("active");
    video.pause();
  }
});

window.addEventListener("scroll", function (evt) {
  if (!document.fullscreenElement) {
    videoContainer.classList.remove("active");
    video.pause();
  }
});

// info section
const infoButton = document.getElementById("infoButton");
const infoSection = document.querySelector(".infoSection");
const closeInfo = document.querySelector(".closeInfo");

infoButton.addEventListener("click", () => {
  infoSection.classList.add("active");
});

closeInfo.addEventListener("click", () => {
  infoSection.classList.remove("active");
});

window.addEventListener("scroll", function (evt) {
  if (!document.fullscreenElement) {
    infoSection.classList.remove("active");
  }
});
