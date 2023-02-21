(function () {
  let magic = document.querySelector(".magic");
  let magicWHalf = magic.offsetWidth / 2;
  let sections = document.querySelectorAll("section");

  // Set the background of .magic to the background of the first section
  magic.style.backgroundImage = sections[0].style.backgroundImage;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the background of .magic to the background of the visible section
          magic.style.backgroundImage = entry.target.style.backgroundImage;
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  let animationInProgress = false;

  userHasScrolled = false;
  userHasClick = false;

  window.onscroll = function (e) {
    userHasScrolled = true;
  };

  sections.forEach((section) => {
    observer.observe(section);
  });

  function resetTimer() {
    if (!animationInProgress) {
      magic.style.opacity = 0;
      clearInterval();
      timer = null;
    }
  }

  function scrollDetection() {
    if (userHasScrolled) {
      magic.style.opacity = 0;
      userHasScrolled = false;
    }
  }

  document.body.addEventListener("click", function (e) {
    if (!animationInProgress) {
      magic.classList.add("animate");
      magic.style.left = e.pageX - magicWHalf + "px";
      magic.style.top = e.pageY - magicWHalf + "px";
      magic.style.opacity = 0.9;
      userHasClick = true;

      animationInProgress = true;

      var ElementCssClass = document.getElementById("aside").className;
      if (ElementCssClass === "active") {
        magic.style.opacity = 0;
        animationInProgress = false;
      }

      setTimeout(function () {
        magic.classList.remove("animate");
        animationInProgress = false;
        resetTimer();
      }, 1000);
    }
  });

  document.body.addEventListener("mousemove", function (e) {
    if (!animationInProgress) {
      userHasClick = false;
      resetTimer();
    }
  });

  document.addEventListener("scroll", () => {
    scrollDetection();
  });

  document.body.addEventListener("mouseout", function (e) {
    if (!animationInProgress) {
      resetTimer();
    }
  });
})();
