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

  let timer;

  userHasScrolled = false;
  window.onscroll = function (e) {
    userHasScrolled = true;
  };

  sections.forEach((section) => {
    observer.observe(section);
  });

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      magic.style.opacity = 0;
    }, 500);
  }

  function scrollDetection() {
    if (userHasScrolled) {
      magic.style.opacity = 0;
      userHasScrolled = false;
    }
  }

  document.body.addEventListener("mousemove", function (e) {
    magic.style.left = e.pageX - magicWHalf + "px";
    magic.style.top = e.pageY - magicWHalf + "px";
    magic.style.opacity = 1;

    // Calculate the distance between the mouse position and the circle position
    const dx = e.pageX - magic.offsetLeft - magicWHalf;
    const dy = e.pageY - magic.offsetTop - magicWHalf;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Set the blur radius based on the distance
    const blurRadius = distance / 10;
    magic.style.filter = `blur(${blurRadius}px)`;

    resetTimer();
    var ElementCssClass = document.getElementById("aside").className;
    if (ElementCssClass === "active") {
      magic.style.opacity = 0;
    }
  });

  document.addEventListener("scroll", () => {
    scrollDetection();
  });

  document.body.addEventListener("mouseout", function (e) {
    resetTimer();
  });
})();
