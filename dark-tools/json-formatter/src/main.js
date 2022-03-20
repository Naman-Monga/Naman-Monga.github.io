/* ======= Constants ======= */
const inputArea = document.querySelector(".large-area--input");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");


/* ======= Event Listeners ======= */
btnFormat.addEventListener("click", () =>     
    {
        var inputText = inputArea.textContent.trim()
        if (!isJsonString(inputText)){
            console.log("Error invalid JSON: "+inputArea.inputText)
            return
        }
        var formatted = JSON.stringify(JSON.parse(inputText), null, 4)
        formatted = hljs.highlight(formatted, {language: 'json', style:'atom-one-dark'}).value
        inputArea.innerHTML = formatted
    }
)

btnMinify.addEventListener("click", () =>     
    {
        var inputText = inputArea.textContent.trim()
        if (!isJsonString(inputText)){
            console.log("Error invalid JSON: "+inputText)
            return
        }
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