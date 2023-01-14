function suggestLanguage(event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value;
    document.querySelector("span#survey").innerText = nameInput;

    let potential1;
    let potential2;
    let backEnd;
    const frontBack = document.querySelector("input[name='frontBack']:checked").value;
    if (frontBack === "front") {
        potential1 = "frontEnd";
    } else{ 
        potential1 = "backEnd";
    }

    const partSpeech = document.querySelector("input[name='partSpeech']:checked").value;
    if (partSpeech === "noun") {
        potential2 = "noun";
    } else if (partSpeech === "adjective") { 
        potential2 = "adjective"; 
    } else {
        potential2 = "verb"
    }
    document.getElementById("output").innerText = potential1 + potential2;
}

window.addEventListener("load", function () {
    const form = document.getElementById("questions");
    form.addEventListener("submit", suggestLanguage);
});