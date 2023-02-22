const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add active class
        window.currentSectionID = entry.target.id;
        entry.target.classList.add("active");
      } else {
        // Remove active class
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Add each section to the intersection observer
sections.forEach((section) => {
  observer.observe(section);
});

//nav effect who move on scrolling
let navLinks = document.querySelectorAll(".stroke a");
let sideBarLinks = document.querySelectorAll("aside a");
let hr = document.getElementById("nav_slide_hover");
let firstLink = navLinks[0];
let secondLink = navLinks[1];
let thirdLink = navLinks[2];

var mousePosition = "out";

setDefaultPosition(11); // set default position to first pos

navLinks.forEach(function (navLink) {
  navLink.addEventListener("mouseenter", function () {
    let linkWidth = navLink.offsetWidth;
    let linkLeft = navLink.offsetLeft;
    hr.style.width = linkWidth + "px";
    hr.style.left = linkLeft + "px";
    mousePosition = "in";
  });

  navLink.addEventListener("mouseleave", function () {
    setDefaultPosition(defaultPos);
    mousePosition = "out";
  });
});

hr.style.transition = "all 0.3s ease";

function setDefaultPosition(pos) {
  switch (pos) {
    case 1:
      defaultPos = 1;
      hr.style.width = firstLink.offsetWidth + "px";
      hr.style.left = firstLink.offsetLeft + "px";
      break;
    case 2:
      defaultPos = 2;
      hr.style.width = secondLink.offsetWidth + "px";
      hr.style.left = secondLink.offsetLeft + "px";
      break;
    case 3:
      defaultPos = 3;
      hr.style.width = thirdLink.offsetWidth + "px";
      hr.style.left = thirdLink.offsetLeft + "px";
      break;
    default:
      defaultPos = 1;
      hr.style.width = 0;
      hr.style.left = firstLink.offsetLeft + "px";
      break;
  }
}

setInterval(() => {
  if (window.currentSectionID === "Home" && mousePosition === "out") {
    setDefaultPosition(1);

    sideBarLinks[0].classList.add("active");
    sideBarLinks[1].classList.remove("active");
    sideBarLinks[2].classList.remove("active");
  } else if (window.currentSectionID === "About" && mousePosition === "out") {
    setDefaultPosition(2);

    sideBarLinks[0].classList.remove("active");
    sideBarLinks[1].classList.add("active");
    sideBarLinks[2].classList.remove("active");
  } else if (
    window.currentSectionID === "Download" &&
    mousePosition === "out"
  ) {
    setDefaultPosition(3);
    sideBarLinks[0].classList.remove("active");
    sideBarLinks[1].classList.remove("active");
    sideBarLinks[2].classList.add("active");
  }
}, 400);
