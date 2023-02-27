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

//character effects
//Add hover effect to Professor image
const prof = document.querySelector(".prof");

prof.addEventListener("mouseover", () => {
  prof.src = "/img/charac/gifProf.gif";
});

prof.addEventListener("mouseout", () => {
  prof.src = "/img/charac/prof.png";
});

//Add hover effect to Mom image
const mom = document.querySelector(".mom");

mom.addEventListener("mouseover", () => {
  mom.src = "/img/charac/gifMom.gif";
});

mom.addEventListener("mouseout", () => {
  mom.src = "/img/charac/mom.png";
});

//Add hover effect to Rival image
const rival = document.querySelector(".rival");

rival.addEventListener("mouseover", () => {
  rival.src = "/img/charac/gifRival.gif";
});

rival.addEventListener("mouseout", () => {
  rival.src = "/img/charac/rival.png";
});
