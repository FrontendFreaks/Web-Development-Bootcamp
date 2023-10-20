const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("student-form")
const infoDiv = document.getElementById("student-info")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const t = event.target
    infoDiv.innerHTML = `<h1>Name: ${t[0].value} </h1>
    <p>School Name: ${t[2].value} </p>
    <p>Age: ${t[1].value} </p>`
})

