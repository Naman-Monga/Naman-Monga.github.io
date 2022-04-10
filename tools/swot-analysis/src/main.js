const inputBoxes = document.querySelectorAll(".input")
const titleBox = document.querySelector(".title")
const listBoxes = document.querySelectorAll(".swot-text")

listBoxes.forEach((listBox)=>{
    new Sortable(listBox, {
        animation:300
    })
})


inputBoxes.forEach((item)=>{
    item.addEventListener("keypress", (curr)=>{
        if (curr.target.value != "" && curr.key === 'Enter'){
            let item = document.createElement("li")
            item.addEventListener("dblclick", editElement)
            item.addEventListener("keypress", toggleEdit)
            item.innerHTML = curr.target.value
            curr.target.parentElement.children[1].append(item)
            curr.target.value = ""
            curr.target.contentEditable = false
        }
    })
})

function toggleEdit(curr){
    if (curr.key == 'Enter'){
        if (curr.target.innerHTML == ""){
            curr.target.remove()
        }else {
            curr.target.contentEditable=false
        }
    }
    
}

function editElement(curr){
    curr.target.contentEditable = true
}

titleBox.addEventListener("click", editElement)
titleBox.addEventListener("keypress", toggleEdit)
