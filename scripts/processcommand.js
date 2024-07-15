function processCommand(command) {
    const commandParsed = command.trim().toLowerCase();
    const args = command.trim().split(' ');
    switch (args[0]) {
        case 'help':
            log.innerHTML += "Available commands: help, clear, banner, git, email, cv, whoru<br>";
            break;
        case 'clear':
            log.innerHTML = '';
            pre.textContent = '';
            break;
        case 'banner':
            const newBanner = document.createElement("pre");
            newBanner.classList.add("pre");
            newBanner.innerHTML = asciiArt;
            log.appendChild(newBanner);
            break;
        case 'git':
            log.innerHTML += "Opening my GitHub in a new tab...";
            window.open(windowGitHub)
            break;
        case 'email':
            log.innerHTML += "allan.delatuillerie@gmail.com";
            break;
        case 'cv':
            log.innerHTML += "Opening my CV in a new tab...";
            window.open(cv, '_blank');
            break;
        case 'whoru':
            if (args.length > 1 && args[1] === 'set' && args.length > 2) {
                whoIsWriting(args[2])
                log.innerHTML += `Hello ${args[2]} ! <br>`;
            } else {
                log.innerHTML += "Usage: whoru [args].<br>&nbsp&nbsp&nbsp[args]:<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspset: set your name<br><br>&nbsp&nbsp&nbsp[Examples]:<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspwhoru set yourname";
            }
            break;
        default:
            log.innerHTML += `${command}: command not found<br>`;
            break;
    }
    log.scrollTop = log.scrollHeight;
}