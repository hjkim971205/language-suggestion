function suggestLanguage(event) {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value;
    document.querySelector("span#survey").innerText = nameInput;

    let potential1;
    let potential2;
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

    const numberInput = parseInt(document.querySelector("input#numberInput").value);
    document.querySelector("span#time").innerText = numberInput;

    const experience = document.getElementById("experience").value;
    if (experience === "1") {
        potential4 = "beginner";
    } else if (experience === "2") {
        potential4 = "intermediate";
    } else {
        potential4 = "expert";
    }

    if (potential1 === "frontEnd"){
        //options = "HTML, VUE, Javascript, React, CSS, jQuery, Angular, Swift, R";
        if (potential2 === "noun") {
            //options = "HTML, VUE, Javascript";
            if (potential4 === "beginner"){
                options = "HTML";
            } else if (potential4 === "intermediate") {
                options = "javascript";
            } else {
                options = "VUE";
            }
        } else if (potential2 === "adjective") {
            //options = "React, CSS, jQuery";
            if (potential4 === "beginner"){
                options = "CSS";
            } else if (potential4 === "intermediate") {
                options = "React";
            } else {
                options = "jQuery";
            }
        } else {
            //options = "Angular, Swift, R";
            if (potential4 === "1"){
                options = "Angular";
            } else if (potential4 === "2") {
                options = "Swift";
            } else {
                options = "R";
            }
        }
    }
    
    if (potential1 === "backEnd") {
        //options = "C#, Java, PHP, Go, Python, Ruby, SQL";
        if (potential2 === "noun") {
            //options = "C#, Java, PHP";
            if (potential4 === "beginner"){
                options = "Java";
            } else if (potential4 === "intermediate") {
                options = "PHP";
            } else {
                options = "C#";
            }
        } else if (potential2 === "adjective") {
            //options = "Go, Python, Rust";
            if (potential4 === "beginner"){
                options = "Python";
            } else if (potential4 === "intermediate") {
                options = "Go";
            } else {
                options = "Rust";
            }
        } else {
            //options = "Ruby, SQL, NodeJS";
            if (potential4 === "beginner"){
                options = "Ruby";
            } else if (potential4 === "intermediate") {
                options = "SQL";
            } else {
                options = "NodeJS";
            }
        }
    }

    if (options === undefined) {
        window.alert("Please fill out missing area!");
    } 

    document.getElementById("output1a").innerText = options;
    document.getElementById("output1b").innerText = options;
    document.querySelector("div#result").removeAttribute("class");
}

window.addEventListener("load", function () {
    const form = document.getElementById("questions");
    form.addEventListener("submit", suggestLanguage);
});