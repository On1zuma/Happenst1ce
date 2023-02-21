document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null; // prevent from scrolling when scroll animation

document.addEventListener("scroll", () => {
  const direction =
    window.pageYOffset - document.lastScrollPosition > 0 ? "down" : "up"; // setting up the direction up or down
  const sections = [...document.querySelectorAll("section")]; // getting all sections inside array

  if (document.onWayTo === null) {
    const destinationIndex =
      direction === "up"
        ? document.lastCentered - 1
        : document.lastCentered + 1; // destination
    if (destinationIndex >= 0 && destinationIndex < sections.length) {
      //   window.scrollTo(0, sections[destinationIndex].offsetTop);
      document.onWayTo = destinationIndex; // prevent from scrolling when scroll animation
    }
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
      section.className = "active";
      if (document.onWayTo === index) {
        document.onWayTo = null; // prevent scrolling
      }
    } else {
      section.className = "";
    }
  }); //check the section

  document.lastScrollPosition = window.pageYOffset;
});
