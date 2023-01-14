function suggestLanguage(event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value;
    document.querySelector("span#survey").innerText = nameInput;

    let potential1;
    let potential2;
    let potential3;
    let potential4;
    let options;
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
        potential2 = "verb";
    }
/*
    const numberInput = parseInt(document.querySelector("input#numberInput").value);
    if (numberInput <5) {
        potential3 = "lessthan";
    } else {
        potential3 = "greaterthan";
    }

    const experience = document.getElementById("experience").value;
    if (experience === "1") {
        potential4 = "beginner";
    } else if (experience === "2") {
        potential4 = "intermediate";
    } else {
        potential4 = "expert";
    }
*/
    if (potential1 === "frontEnd"){
        options = "HTML, VUE, Javascript, React, CSS, jQuery, Angular, Swift";
        if (potential2 === "noun") {
            options = "HTML, VUE, Javascript";
            if ()
        } else if (potential2 === "adjective") {
            options = "React, CSS, jQuery";
        } else {
            options = "Angular, Swift";
        }
    }
    
    if (potential1 === "backEnd") {
        options = "C#, Java, PHP, Go, Python, Ruby, SQL";
        if (potential2 === "noun") {
            options = "C#, Java, PHP";
        } else if (potential2 === "adjective") {
            options = "Go, Python";
        } else {
            options = "Ruby, SQL";
        }
    }


    document.getElementById("output").innerText = options;
}

window.addEventListener("load", function () {
    const form = document.getElementById("questions");
    form.addEventListener("submit", suggestLanguage);
});