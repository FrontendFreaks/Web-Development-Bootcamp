const form = document.createElement("form");
const inputBox = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

button.textContent = "Add";
inputBox.setAttribute('placeholder','Frontend Development')

form.append(inputBox, button);

document.body.append(form, ul);

button.addEventListener("click", (e) => {
  e.preventDefault();
  if(inputBox.value !== ""){
  const li = document.createElement("li");
  li.textContent = inputBox.value;
  ul.append(li);

  inputBox.value = "";
}else{
    alert("Please add task??")
}

  li.addEventListener("click", () => {
    li.remove();
  });

});

document.body.style.backgroundColor = 'goldenrod'

button.classList.add('btn')