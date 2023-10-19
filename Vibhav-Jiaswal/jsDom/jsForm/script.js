const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("student-form")
const infoDiv = document.getElementById("student-container")

console.log(submitBtn ,form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t =  e.target;
     
    const innerDiv = document.createElement("div")

    innerDiv.innerHTML = `<h1>Name:${t[0].value} </h1>
    <p>Age : ${t[1].value} </p>
    <p>School Name: ${t[2].value} </p>`

    infoDiv.append(innerDiv);
})