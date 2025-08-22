// Questions + Corresponding GIFs
const data = [
  { q: "Do you love me? 🥰", gif: "image/cat1.gif" },
  { q: "Please think again 🙏", gif: "image/cat2.gif" },
  { q: "Ek aur baar soch lo 🤔", gif: "image/cat3.gif" },
  { q: "Baby man jao, kitna bhav khaogi 😘", gif: "image/cat4.gif" }
];

let current = 0;

// Sounds
const yesSound = new Audio("sounds/yes.mp3");
const noSound = new Audio("sounds/no.mp3");

// Update question + GIF
function updateContent() {
  const questionEl = document.getElementById("question");
  const gifEl = document.getElementById("gif");
  const noBtn = document.querySelector(".no");

  questionEl.textContent = data[current].q;
  gifEl.src = data[current].gif;

  // GIF fade-in
  gifEl.style.opacity = 0;
  setTimeout(()=> { gifEl.style.transition="opacity 0.5s"; gifEl.style.opacity=1; }, 50);

  // Hide "No" button on last question
  if(current === data.length -1){
    noBtn.style.display = "none";
  } else {
    noBtn.style.display = "inline-block";
  }
}

// "No" button
function nextQuestion() {
  noSound.play();
  current++;
  if(current < data.length){
    updateContent();
  } else {
    endQuiz();
  }
}

// "Yes" button
function sayYes() {
  yesSound.play();
  endQuiz();
}

// End quiz
function endQuiz() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("gif").classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}

// Initial load
window.onload = updateContent;
