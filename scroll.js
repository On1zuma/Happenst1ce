// Take all sections of the page
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add active class
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
