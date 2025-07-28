//navigation
const navSelect = document.querySelectorAll('.navSelect');
const contentSections = document.querySelectorAll('.content'); 

navSelect.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
      
        const clickedSection = this.getAttribute('data-section');
        
        navSelect.forEach(n => n.classList.remove('active'));
        contentSections.forEach(c => c.classList.remove('active')); 
        
        this.classList.add('active');
        document.getElementById(clickedSection).classList.add('active');
    });
});

//dropdown button
function dropdownMenu() {
  closeDropdowns();
  document.getElementById("dropdownMenu").classList.toggle("show");
  
}

//dropdown button health
function dropdownMenuHealth() {
  closeDropdowns();
  document.getElementById("dropdownMenuHealth").classList.toggle("show");

}

//dropdown button health
function dropdownMenuGoals() {
  closeDropdowns();
  document.getElementById("dropdownMenuGoals").classList.toggle("show");

}

//dropdown button health
function dropdownMenuMyJourney() {
  closeDropdowns();
  document.getElementById("dropdownMenuMyJourney").classList.toggle("show");

}

function closeDropdowns() {
  let dropdowns = document.getElementsByClassName("dropdownContent");
  for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
  }
}

window.onclick = function(event) {
if (!event.target.matches('.topBtn')) {
  if (!event.target.matches('.topBtn')) {
    closeDropdowns();
}
}
}

//breathing function
const countBox = document.getElementById("countBox");
let count = 60;

function startTimer(){
  const countdown = setInterval(() => {
    countBox.textContent = count;
    count--;

    if(count <= 0) {
      clearInterval(countdown);
      display.textContent = "checkmark"
    }
  }, 1000);
}

//affirmations

const affirmations = [
  "I am beautiful",
  "I am smart",
  "I am talented",
  "I am enough",
  "I am loved",
  "I am worthy",
  "I am unique",
  "I can do anything I put my mind to"
];

const affirmation = document.getElementById("affirmation");

let i = 0;
const timeLimit = 2000;

function affirmloop() {
  if (i < affirmations.length) {

    affirmation.textContent = "I affirm that " + affirmations[i];
    i = (i + 1) % affirmations.length;  
    setTimeout(affirmloop, timeLimit);
  } 

}

affirmloop();

const fileInput = document.getElementById("fileInput");
const pfp = document.querySelector(".pfp");

pfp.addEventListener("click", function() {
  fileInput.click(); 
});

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      pfp.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

let streaksCount = 10;
const streaksBox = document.getElementById("streaks");
streaksBox.textContent = "Streaks: Day " + streaksCount;

