const form = document.createElement("form")
const inputBox = document.createElement("input")
const button = document.createElement("button")
const list = document.createElement("ul")
button.textContent = "Add"
form.append(inputBox, button)
document.body.append(form, list)

button.addEventListener("click", (e) => {
    e.preventDefault()
    // list.innerHTML += `<li>${inputBox.value}</li>`
    const li = document.createElement("li")
    li.textContent = inputBox.value;
    list.append(li)

    li.addEventListener("click", () => {
        list.removeChild(li)
    })

    inputBox.value = ""
})

document.body.style.backgroundColor = "antiquewhite"
button.classList.add("btn")
button.classList.remove("btn")