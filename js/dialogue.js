const dialogue = [
  "Psst! Have you heard the legend of Happenst1ce? They say that the game's avatar was once a real person who lived centuries ago.",
  "Rumor has it that the avatar's fighting skills were so epic, they once defeated an entire army of trolls single-handedly!",
  "I don't know about you, but I'm ready to uncover those secret training techniques and become a master gamer. Are you with me?",
  "Let's embark on this epic quest together, and who knows? Maybe we'll even become the stuff of legends ourselves!",
];

// dialog box effect
let currentDialogueIndex = 0;
const dialogueElement = document.querySelector(".dial");
const nextButton = document.querySelector(".nextB");

function writeDialogue() {
  let currentText = "";
  let dialogueText = dialogue[currentDialogueIndex];
  let i = 0;

  const intervalId = setInterval(() => {
    currentText += dialogueText.charAt(i);
    dialogueElement.textContent = currentText;
    i++;

    if (i > dialogueText.length - 1) {
      clearInterval(intervalId);
      nextButton.disabled = false;
    }
  }, 5);
}

writeDialogue();

nextButton.addEventListener("click", () => {
  nextButton.disabled = true;
  currentDialogueIndex++;

  if (currentDialogueIndex >= dialogue.length - 1) {
    nextButton.textContent = "Go Home";
  }

  if (currentDialogueIndex >= dialogue.length) {
    nextButton.setAttribute("href", "/");
  } else {
    dialogueElement.textContent = "";
    writeDialogue();
  }
});

// background effect
const backgrounds = ["bg1", "bg2", "bg3", "bg4"];
let currentBackgroundIndex = 0;

function changeBackground() {
  const ourSection = document.getElementById("OurSection");
  ourSection.classList.add("fade-out");

  setTimeout(() => {
    ourSection.classList.remove(
      backgrounds[currentBackgroundIndex],
      "fade-out"
    );
    currentBackgroundIndex++;
    if (currentBackgroundIndex >= backgrounds.length) {
      currentBackgroundIndex = 0;
    }
    ourSection.classList.add(backgrounds[currentBackgroundIndex], "fade-in");
  }, 1000);

  setTimeout(() => {
    ourSection.classList.remove("fade-in");
  }, 2000);
}

setInterval(changeBackground, 11000);

//Add hover effect to prof image
const prof = document.querySelector(".prof");

prof.addEventListener("mouseover", () => {
  prof.src = "/img/charac/gifProfv2.gif";
});

prof.addEventListener("mouseout", () => {
  prof.src = "/img/charac/prof.png";
});
