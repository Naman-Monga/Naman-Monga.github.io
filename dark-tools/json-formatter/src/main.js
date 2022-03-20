/* ======= Constants ======= */
const inputArea        = document.querySelector(".large-area--input");
const btnFormat        = document.querySelector(".controls__button--format");
const btnMinify        = document.querySelector(".controls__button--minify");
const btnCopy          = document.querySelector(".controls__button--copy");
const invalidJsonPopup = document.getElementById("invalidJsonPopup");
const jsonCopiedPopup  = document.getElementById("jsonCopiedPopup");


/* ======= Event Listeners ======= */
btnFormat.addEventListener("click", () =>
    {
        var inputText = inputArea.textContent
        if (!isJson(inputText)){
            var jsonText = stringToJson(inputText)
            if(jsonText != ""){
                inputText = jsonText
            } else {
                console.log("Error invalid JSON: "+ inputText)
                invalidJsonPopup.classList.add("show");
                return
            }
        }
        invalidJsonPopup.classList.remove("show");
        var formatted = JSON.stringify(JSON.parse(inputText), null, 4)
        formatted = hljs.highlight(formatted, {language: 'json', style:'atom-one-dark'}).value
        inputArea.innerHTML = formatted
    }
)

btnMinify.addEventListener("click", () =>
    {
        var inputText = inputArea.textContent
        if (!isJson(inputText)){
            var jsonText = stringToJson(inputText)
            if(jsonText != ""){
                inputText = jsonText
            } else {
                console.log("Error invalid JSON: "+ inputText)
                invalidJsonPopup.classList.add("show");
                return
            }
        }
        invalidJsonPopup.classList.remove("show");
        var formatted = JSON.stringify(JSON.parse(inputText))
        formatted = hljs.highlight(formatted, {language: 'json', style:'atom-one-dark'}).value
        inputArea.innerHTML = formatted
    }
)

btnCopy.addEventListener("click", () =>
{
    jsonCopiedPopup.classList.toggle("show");
    setTimeout(() => {
        jsonCopiedPopup.classList.toggle("show") 
    }, 3000);
    navigator.clipboard.writeText(inputArea.textContent);
})

/* ======= Helper Functions ======= */
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function stringToJson(str) {
    str = str.replaceAll('\\', '')
    if (!isJson(str)){
        return ""
    }
    return str
}