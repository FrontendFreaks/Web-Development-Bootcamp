const btn = document.getElementById("btn");
const div = document.getElementById("main-container");

function handeClick(src){
    console.log("click me", src);
}

btn.addEventListener("click", (e) => {
    console.log("click me btn");
    e.stopPropagation();
})

div.addEventListener("click", (e) => {
    console.log("click me div");
})

// event Bubbling: child then parent

// event capturing: parent then child

// stop propogation: stop further propagation of the current event

// event Delegation: Attach an event listener to a parent element that fires when an event occurs on a child element.

// Event Propagation: When an event moves through the DOM from child to a parent element, that's called Event Propagation, because the event propagates, or moves through the DOM.
 

const h1 = document.createElement("h1")
const textNode = document.createTextNode("Heading")

h1.append(textNode)

div.append(h1)

div.removeChild()

