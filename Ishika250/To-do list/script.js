// const containerDiv = document.getElementsByClassName("container")[0]


// const h1 = document.createElement("h1")
// const p = document.createElement("p")
// h1.textContext = "Heading 1"
// containerDiv.append(h1, "Click" , "", p)


// console.log(h1 , containerDiv)

// h1.addEventListener("click" , () => {
//     h1.style.backgroundColor = "tomato"
// })



// console.log(getElementsByTagName("h1")[0].textContent)
// console.log(getElementsByTagName("h1")[0].innerText)
const form = document.createElement("form")
const inputBox = document.createElement("input")
const button = document.createElement("button")
const list = document.createElement("ul")
button.textContent = "Add"
form.append(inputBox , button)
document.body.append(form, list)

button.addEventListener("click" , (e) => {
    e.preventDefault()
    console.log(e.target)
    // list.innerHTML += '<li>${inputBox.value}</li>'
    const li = document.createElement("li")
    li.textContent = inputBox.value;
    list.append(li)

    li.addEventListener("click", () => {
        list.removeChild(li)
    } )
    inputBox.value = ""
})

document.body.style.backgroundColor = "brown"
// button.style.padding = "3px 6px"
button.classList.add("btn")
button.classList.remove("btn")