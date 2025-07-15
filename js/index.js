/* COMMENTED OUT JS SINCE MOVING TO SEPERATE HTML FILES -Mark
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
*/


//dropdown button
function dropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropdownBtn')) {
    let dropdowns = document.getElementsByClassName("dropdownContent");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
=======
//Streak counter 
class Streaks{
    constructor(name, count){
        this.name = name; // call it streaks later when calling
        this.count = count; // num of days streak is going
    }
}

// Shared habit state
let habits = [];
let currentHabitIndex = 0;

// DOM Elements
const habitForm = document.getElementById('habitForm');
const habitInput = document.getElementById('habitInput');
const habitList = document.getElementById('habitList');

const currentHabitName = document.getElementById('currentHabitName');
const habitCount = document.getElementById('habitCount');
const prevBtn = document.getElementById('prevHabit');
const nextBtn = document.getElementById('nextHabit');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');

// Render the tracker preview based on current index
function updateHabitPreview() {
    if (habits.length == 0) {
        currentHabitName.textContent = "No habits yet";
        habitCount.textContent = "-";
        incBtn.disabled = true;
        decBtn.disabled = true;
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    const habit = habits[currentHabitIndex];
    currentHabitName.textContent = habit.name;
    habitCount.textContent = habit.count;
    incBtn.disabled = false;
    decBtn.disabled = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

// Handle habit creation
habitForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = habitInput.value.trim();
    if (!name) return;

    // Add habit to state
    habits.push({ name, count: 0 });
    habitInput.value = '';

    // Update current habit index to new habit
    currentHabitIndex = habits.length - 1;

    // Re-render the entire habit list (clears and redraws)
    renderHabitList();

    // Update the preview to show the new habit
    updateHabitPreview();
});


// Add habit to visual list
function addHabitToList(name, index) {
    const li = document.createElement('li');
    li.textContent = name;

    const delBtn = document.createElement('button');
    delBtn.textContent = '✖';
    delBtn.style.marginLeft = '10px';
    delBtn.addEventListener('click', () => {
        // Remove from state and UI
        habits.splice(index, 1);
        li.remove();

        if (currentHabitIndex >= habits.length) {
            currentHabitIndex = habits.length - 1;
        }
        updateHabitPreview();
        // Re-render list to ensure proper indexes
        renderHabitList();
    });

    li.appendChild(delBtn);
    habitList.appendChild(li);
}

// Re-render all list items (after deletion)
function renderHabitList() {
    habitList.innerHTML = '';  // clear all existing list items
    habits.forEach((habit, idx) => {
        addHabitToList(habit.name, idx);
    });
}

prevBtn.addEventListener('click', () => {
    if (habits.length === 0) return;
    currentHabitIndex = (currentHabitIndex - 1 + habits.length) % habits.length;
    updateHabitPreview();
});

nextBtn.addEventListener('click', () => {
    if (habits.length === 0) return;
    currentHabitIndex = (currentHabitIndex + 1) % habits.length;
    updateHabitPreview();
});

//>>>>>>> main

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
