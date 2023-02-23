// aside navbar
const openMenu = () => {
  document.querySelector(".backblur").className = "backblur active";
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  document.querySelector(".backblur").className = "backblur";
  document.querySelector("aside").className = "";
};

document.getElementById("xBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};

document.querySelector(".backblur").onclick = (e) => {
  closeMenu();
};

// loading effect
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  loading.classList.add("hidden");
});
