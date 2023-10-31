const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("student-form");
// const infoDiv=document.getElementById("student-info");
// const name=document.getElementById("info-name");
// const age=document.getElementById("info-age");
// const clg=document.getElementById("info-clg");
// console.log(submitBtn, form, infoDiv)
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("submit",e);
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e.target,e.target[0].value ,e.target.length);
// })

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const maincontainer = document.createElement("div");
    maincontainer.setAttribute("class", "student-info");
    const name=document.createElement("h1");
    name.setAttribute("id","info-name");
    const nameNode=document.createTextNode("Name: ");
    name.append(nameNode);

    const age=document.createElement("p");
    age.setAttribute("id","info-age");
    const ageNode=document.createTextNode("Age: ");
    age.append(ageNode);

    const clg=document.createElement("p");
    clg.setAttribute("id","info-clg");
    const clgNode=document.createTextNode("Clg Name: ");
    clg.append(clgNode);
    // <h1 id="info-name">Name: </h1>
    // <p id="info-age">Age: </p>
    // <p id="info-clg">Clg Name: </p>
    
    maincontainer.appendChild(name);
    maincontainer.appendChild(age);
    maincontainer.appendChild(clg);

    maincontainer.style.display="flex";
    maincontainer.style.flexDirection="column";
    maincontainer.style.border="1px solid black";
    maincontainer.style.borderRadius="5px";
    maincontainer.style.width="400px";
    maincontainer.style.marginTop="20px";
    maincontainer.style.padding="10px";

    document.body.appendChild(maincontainer);

    name.textContent+=`${e.target[0].value}`;
    age.textContent+=`${e.target[1].value}`;
    clg.textContent+=`${e.target[2].value}`;
})