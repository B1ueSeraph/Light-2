let newts = [];

const ul = document.querySelector("ul");
const newItem = document.querySelector("#newItem");
const sectionTag = document.querySelector("section");

document.querySelector('#GOD').addEventListener("submit", function(event){
    console.log("submitting the form")
    event.preventDefault();
    newts.push(newItem.value);
    console.log(newts);
  
    var template = newts.map(newt=>
        `
        <li> ${newts} </li>
        `);
    sectionTag.innerHTML= template;
})