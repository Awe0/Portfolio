document.addEventListener("DOMContentLoaded", () => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = input.value;
            input.value = "";
            
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");
            
            const clonedPromptNameH1 = promptNameH1.cloneNode(true);
            clonedPromptNameH1.classList.add("prompt-inline");
            
            const commandSpan = document.createElement("span");
            commandSpan.textContent = ` ${command}`;
            
            logEntry.appendChild(clonedPromptNameH1);
            logEntry.appendChild(commandSpan);
            log.appendChild(logEntry);
            
            log.scrollTop = log.scrollHeight;
            
            processCommand(command);
        }
    });
});

document.addEventListener('click', function(event) {
    if (event.target !== input) {
        input.focus();
    }
});
