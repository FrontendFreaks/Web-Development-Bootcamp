// getting HTML elements
const nav = document.querySelector("nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// js code to make draggable nav
function onDrag({ movementY }) { //movementY gets mouse vertical value
  const navStyle = window.getComputedStyle(nav), //getting all css style of nav
    navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
    navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
    windHeight = window.innerHeight; // getting window height

  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if (navTop > windHeight - navHeight) {
    nav.style.top = `${windHeight - navHeight}px`;
  }
}

//this function will call when user click mouse's button and  move mouse on nav
nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from nav
nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag);
});

//for Quotes
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = `"Make your Weakness as Strength"`;
  }, 0);
  setTimeout(() => {
    text.textContent = `"Give not just advice,but support as well"`;
  }, 3000);
  setTimeout(() => {
    text.textContent = `"Working to be better than Yesterday"`;
  }, 6000);
  setTimeout(() => {
    text.textContent = `"Getting Success as a Result of Hardwork is more sexy than a girl"`;
  }, 9000);
  setTimeout(() => {
    text.textContent = `"NEXT STOP THE TOP"`;
  }, 12000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 15000);