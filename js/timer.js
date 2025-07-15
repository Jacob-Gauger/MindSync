function startMeditationTimer() {
    const timerDisplay = document.getElementById("timerDisplay");
    const durationSelect = document.getElementById("durationSelect");
    const startBtn = document.getElementById("startBtn");
    const selectedMinutes = parseInt(durationSelect.value);
    let timeLeft = selectedMinutes * 60; // seconds

    //disable the start button to prevent multiple timers running at the same time
    startBtn.disabled = true;
    startBtn.textContent = "Running...";

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        // Format MM:SS
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Session Complete!";

            // Re-enable Start button
            startBtn.disabled = false;
            startBtn.textContent = "Start";
            return;
        }

        timeLeft -= 1;
    }

    updateTimer(); 
    const timerInterval = setInterval(updateTimer, 1000);
}

document.getElementById("startBtn").onclick = startMeditationTimer;