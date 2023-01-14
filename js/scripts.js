function suggestLanguage(event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value;
    document.querySelector("span#survey").innerText = nameInput;

    let potential;
    let frontEnd;
    let backEnd;
    const frontBack = document.querySelector("input[name='frontBack']:checked").value;
    if (frontBack === "front") {
        potential = "frontEnd";
    } else{ 
        potential = "backEnd"; //remove quotes
    }

    document.getElementById("output").innerText = potential;
}

window.addEventListener("load", function () {
    const form = document.getElementById("questions");
    form.addEventListener("submit", suggestLanguage);
});