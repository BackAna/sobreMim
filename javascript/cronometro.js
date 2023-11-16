let timerInterval;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
    
        function startTimer() {
          timerInterval = setInterval(updateTimer, 1000);
        }
    
        function stopTimer() {
          clearInterval(timerInterval);
        }
    
        function resetTimer() {
          stopTimer();
          seconds = 0;
          minutes = 0;
          hours = 0;
          updateDisplay();
        }
    
        function updateTimer() {
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
              minutes = 0;
              hours++;
            }
          }
          updateDisplay();
        }
    
        function updateDisplay() {
          const display = document.getElementById("display");
          display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }
    
        function pad(value) {
          return value.toString().padStart(2, "0");
        }











        