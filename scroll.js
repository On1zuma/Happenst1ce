// Récupérez toutes les sections de votre page
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
    threshold: 0.5, // Définissez un seuil de 50% pour déterminer quand une section est visible
  }
);

// Ajoutez chaque section à l'observeur d'intersection
sections.forEach((section) => {
  observer.observe(section);
});
