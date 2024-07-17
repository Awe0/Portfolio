function processCommand(command) {
    const commandParsed = command.trim().toLowerCase().split(' ');
    const args = commandParsed;
    switch (args[0]) {
        case 'help':
            log.innerHTML += "Available commands: help, clear, banner, projects, git, email, cv, whoru, linkedin<br>";
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
        case 'projects':
            log.innerHTML += `Which project do you want to see ? ${br}- dataviz${br}- none`
            break
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
            if (args.length > 1 && args[1] === 'set') {
                whoIsWriting(args[2])
                log.innerHTML += `Hi ${args[2]} ! <br>`;
            } else {
                log.innerHTML += `Usage: whoru [args].${br}[args]:${br}${sp}set: set your name<br>${br}[Examples]:${br}${sp}whoru set yourname`;
            }
            break;
        case 'linkedin':
            log.innerHTML += "Opening my linkedin account in a new tab...";
            window.open(windowLinkedin)
            break;
        case 'dataviz':
            log.innerHTML += "Opening Dataviz in a new tab...";
            break
        default:
            log.innerHTML += `${command}: command not found<br>`;
            break;
    }
    log.scrollTop = log.scrollHeight;
}