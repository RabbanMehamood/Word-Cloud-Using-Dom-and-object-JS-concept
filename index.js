let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let addBtnEl = document.getElementById("addBtn");
let errorMsg = document.getElementById("errorMsg");


addBtnEl.onclick = function() {
    let userInputValue = userInputEl.value;
    if (userInputValue === "") {
        errorMsg.textContent = "Please Enter a Word";
    } else {
        let spanEl = document.createElement("span");
        let randomFontSize = Math.ceil(Math.random() * 60) + "px";
        spanEl.style.fontSize = randomFontSize;
        spanEl.textContent = userInputValue;
        wordsContainer.appendChild(spanEl);
    }
    userInputEl.value = "";
}
