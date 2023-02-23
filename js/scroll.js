(function () {
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

  // Navbar effect
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

  // We check the current section and update the default position
  const linkIndices = {
    Home: 0,
    About: 1,
    Download: 2,
  };

  setInterval(() => {
    if (mousePosition === "out") {
      const index = linkIndices[window.currentSectionID] || 0;
      setDefaultPosition(index + 1);
      sideBarLinks.forEach((link, i) => {
        link.classList.toggle("active", i === index);
      });
    }
  }, 400);
})();
