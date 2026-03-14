// transmit.js - Logic for the elusive TRANSMIT button trap.

(function() {
    let transmitClicksRequired = 20;
    let currentTransmitClicks = 0;
    let transmitActive = false;

    document.addEventListener("DOMContentLoaded", () => {
        const transmitBtn = document.getElementById("transmit-btn");
        const titleInput = document.getElementById("transmit-title");
        const categoryInput = document.getElementById("transmit-category");
        const editorInput = document.getElementById("journalEditor");
        const flashMessage = document.getElementById("flash-message");

        if (!transmitBtn || !titleInput || !categoryInput || !editorInput) return;

        transmitBtn.addEventListener("click", function(e) {
            e.preventDefault();

            // Validate form before starting the annoying minigame
            if (!transmitActive) {
                if (!titleInput.value.trim() || categoryInput.value === "" || !editorInput.value.trim()) {
                    alert("SYSTEM ERROR: CANNOT TRANSMIT EMPTY LOG. PLEASE FILL ALL FIELDS AND SELECT A CATEGORY.");
                    return;
                }
                
                // Form is valid - start the trap
                transmitActive = true;
                currentTransmitClicks = 0;
                
                // Change appearance and position
                transmitBtn.style.position = "fixed";
                transmitBtn.style.zIndex = "100000";
                transmitBtn.style.width = "auto";
                
                relocateButton();
                updateButtonText();
                
            } else {
                // Game in progress
                currentTransmitClicks++;
                
                if (currentTransmitClicks >= transmitClicksRequired) {
                    // Minigame won - log 'transmitted'
                    transmitActive = false;
                    
                    // Reset styling
                    transmitBtn.style.position = "static";
                    transmitBtn.innerText = "TRANSMIT";
                    transmitBtn.style.left = "auto";
                    transmitBtn.style.top = "auto";
                    transmitBtn.style.transform = "none";
                    transmitBtn.style.width = "100%";
                    
                    // Clear form
                    titleInput.value = "";
                    categoryInput.value = "";
                    editorInput.value = "";
                    
                    // Flash success message
                    if (flashMessage) {
                        flashMessage.innerHTML = "LOG TRANSMITTED. PROBABLY INTERCEPTED. GOOD LUCK.";
                        flashMessage.classList.add('active');
                        setTimeout(() => { 
                            flashMessage.classList.remove('active'); 
                            flashMessage.innerHTML = "FINE. CONTINUE YOUR LITTLE DIARY.<br>THEY ARE ALL WATCHING."; 
                        }, 3000);
                    } else {
                        alert("LOG TRANSMITTED.");
                    }
                    
                } else {
                    // Proceed to next level of annoyance
                    relocateButton();
                    updateButtonText();
                }
            }
        });

        function relocateButton() {
            // Randomly position the button inside the visible viewport
            const btnWidth = transmitBtn.offsetWidth || 150;
            const btnHeight = transmitBtn.offsetHeight || 60;
            
            const maxX = window.innerWidth - btnWidth - 20;
            const maxY = window.innerHeight - btnHeight - 20;
            
            const randomX = Math.max(10, Math.floor(Math.random() * maxX));
            const randomY = Math.max(10, Math.floor(Math.random() * maxY));
            
            transmitBtn.style.left = randomX + "px";
            transmitBtn.style.top = randomY + "px";
            
            // Add some erratic rotation just to make clicking it even worse
            const rotation = (Math.random() - 0.5) * 30; // -15 to +15 degrees
            transmitBtn.style.transform = `rotate(${rotation}deg)`;
        }

        function updateButtonText() {
            const clicksLeft = transmitClicksRequired - currentTransmitClicks;
            transmitBtn.innerText = `TRANSMIT (${clicksLeft} LEFT)`;
            
            // Getting desperate styling colors
            if (clicksLeft <= 5) {
                transmitBtn.style.backgroundColor = "#8a0303";
                transmitBtn.style.color = "white";
            } else if (clicksLeft <= 10) {
                transmitBtn.style.backgroundColor = "#c4a000";
                transmitBtn.style.color = "black";
            } else {
                transmitBtn.style.backgroundColor = "#c0c0c0"; // default
                transmitBtn.style.color = "black";
            }
        }
    });
})();
