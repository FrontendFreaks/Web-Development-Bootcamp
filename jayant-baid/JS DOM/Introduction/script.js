let heading = document.querySelector("h1");
console.log(heading);

//! Change Text
// heading.innerHTML="JAYANT BAID" // isko yeh html treat karta h

// heading.innerHTML=`<a href="https://www.google.com" target="_main">JAYANT BAID</a>`

// heading.innerText=`<a href="https://www.google.com" target="_main">JAYANT BAID</a>` // isko yeh text ki taraf treat karta h
// heading.textContent="WEB DEVELOPMENT"

const headings=document.querySelectorAll("h1");
console.log(headings); // NODELIST
headings[0].textContent="WEB DEVELOPMENT"
headings.item(1).textContent="WEB DEVELOPMENT2"

const para=document.querySelector(".para");
console.log(para.outerHTML);

const headings1=document.getElementsByTagName("h1");
console.log(headings1); // HTML COLLECTION

//! How to add style
const btn=document.getElementById("btn");
// console.log(btn);
//* Camelcase style 
btn.style.color="white";
btn.style.backgroundColor="black";
btn.style.borderRadius="5px"

// Event Bubbling: child then parent
// Event Capturing: parent then child -> jb hum eventlistner me true kardenge
// stop propagation:

// HW: What is event delegation 