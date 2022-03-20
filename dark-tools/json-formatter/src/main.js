/* ======= Constants ======= */
const inputArea = document.querySelector(".large-area--input");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");
const popup = document.getElementById("myPopup");


/* ======= Event Listeners ======= */
btnFormat.addEventListener("click", () =>     
    {
        var inputText = inputArea.textContent
        if (!isJsonString(inputText)){
            console.log("Error invalid JSON: "+ inputText)
            popup.classList.add("show");
            return
        }
        popup.classList.remove("show");
        var formatted = JSON.stringify(JSON.parse(inputText), null, 4)
        formatted = hljs.highlight(formatted, {language: 'json', style:'atom-one-dark'}).value
        inputArea.innerHTML = formatted
    }
)

btnMinify.addEventListener("click", () =>     
    {
        var inputText = inputArea.textContent
        if (!isJsonString(inputText)){
            console.log("Error invalid JSON: "+ inputText)
            popup.classList.add("show");
            return
        }
        popup.classList.remove("show");
        var formatted = JSON.stringify(JSON.parse(inputText))
        formatted = hljs.highlight(formatted, {language: 'json', style:'atom-one-dark'}).value
        inputArea.innerHTML = formatted
    }
)

/* ======= Helper Functions ======= */
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}