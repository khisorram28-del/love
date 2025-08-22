// ==========================
// Questions + Corresponding GIFs
// ==========================
const data = [
  { q: "Do you love me? 🥰", gif: "image/catmiss3.gif" },
  { q: "Please think again 🙏", gif: "image/cat4.gif" },
  { q: "Ek aur baar soch lo 🤔", gif: "image/cat5.gif" },
  { q: "suglaa man jao, kai bhav khaov 😘", gif: "image/catkiss2.gif" }
];

let current = 0;

// ==========================
// Load Sounds
// ==========================
const yesSound = new Audio("sounds/yes.mp3");
const noSound = new Audio("sounds/no.mp3");

// ==========================
// Update Question & GIF
// ==========================
function updateContent() {
  const questionEl = document.getElementById("question");
  const gifEl = document.getElementById("gif");
  const noBtn = document.querySelector(".no");

  // Set question and GIF
  questionEl.textContent = data[current].q;
  gifEl.src = data[current].gif;

  // GIF fade-in effect
  gifEl.style.opacity = 0;
  setTimeout(() => { 
    gifEl.style.transition = "opacity 0.5s"; 
    gifEl.style.opacity = 1; 
  }, 50);

  // Hide "No" button on last question
  if(current === data.length - 1){
    noBtn.style.display = "none";
  } else {
    noBtn.style.display = "inline-block"; // show for other questions
  }
}

// ==========================
// "No" button click
// ==========================
function nextQuestion() {
  noSound.play(); // play no sound

  current++;
  if(current < data.length){
    updateContent();
  } else {
    endQuiz();
  }
}

// ==========================
// "Yes" button click
// ==========================
function sayYes() {
  yesSound.play(); // play yes sound
  endQuiz();
}

// ==========================
// End Quiz: hide content & show result
// ==========================
function endQuiz() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("gif").classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}

// ==========================
// Initial load
// ==========================
window.onload = updateContent;
