// // content, style, structure

// // How to access HTML Elements (NODES)

// const headings = document.querySelectorAll("#p")
// const heading = document.querySelector("h1")
// const para = document.getElementsByClassName("para")
// const btn = document.getElementById("btn")
// const headin1 = document.getElementsByTagName("h1")

// console.log(para, btn, headin1)

// // Change Text
// // heading.innerHTML = `<a href="https://google.com">New Heading</a>`
// // heading.innerText = `<a href="https://google.com">
// // New Heading       
// // </a>`
// // heading.textContent = `<a href="https://google.com">
// // New Heading
// // </a>`


// // How to add style?
// btn.style.color = "red"
// btn.style.backgroundColor = "black"


const btn = document.getElementById("btn")
const containerDiv = document.getElementById("main-container")

// function handleClick(event, src){
//     if(src === "div"){
//         event.stopPropagation()
//     }
//     console.log("click me", src)
// }

// btn.addEventListener("click", (e) => {
//     // e.stopPropagation()
//     console.log("click me btn")
//     e.stopPropagation()

// })

// containerDiv.addEventListener("click", (e) => {
//     console.log("click me div")
// })

// event Bubbling: child then parent
// event capturing: parent then child

// Stop propagation

// Home Work: what is Event Delegation (HINT: )
// Home Work: Student Registeration Form

// containerDiv.innerHTML = "<h1>Heading</h1>"
const h1 = document.createElement("h1")
const textNode = document.createTextNode("Heading")
h1.append(textNode)
containerDiv.append(h1)
containerDiv.append(h1)
containerDiv.append(h1)
containerDiv.append(h1)
containerDiv.append(h1)
containerDiv.remove()

console.log(containerDiv)