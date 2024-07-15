const promptNameH1 = createPromptName();

function createPromptName() {
    const promptNameH1 = document.createElement("h1");
    const user = "guest";
    const at = '@';
    const me = "AWE.com";
    const tilde = ":~$";
    const promptNameArray = [user, at, me, tilde];
    const variableName = ["user", "at", "me", "tilde"];
    for (let i = 0; i < promptNameArray.length; i++) {
        const span = document.createElement("span");
        span.setAttribute("id", variableName[i]);
        span.textContent = promptNameArray[i];
        promptNameH1.appendChild(span);
    }
    promptNameH1.setAttribute("id", "promptH1");
    return promptNameH1;
}

function whoIsWriting(who) {
    const user = document.getElementById("user")
    user.textContent = who
}
