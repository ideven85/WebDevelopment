const heading = document.querySelector(".second")
const para = document.querySelector("#para")
console.log(heading);
console.log(para);
console.log(document.getElementById('para'));
console.log(document.getElementsByClassName('first'));
console.log(document.getElementsByTagName('h2'));
const secondHeading = document.querySelector('h2');
secondHeading.setAttribute('id','newId');
secondHeading.setAttribute('style','color:yellow');
heading.style.color = "red";
para.style.backgroundColor = "grey";
const btn = document.createElement('button');
btn.textContent = 'Click here';
btn.className = 'btn1';

const division = document.querySelector('div');

const lastDiv = document.createElement('div');
lastDiv.appendChild(btn);
division.nextElementSibling = lastDiv;
division.appendChild(btn);

const para1 = document.querySelector('p');
para1.addEventListener("click", function(){
    paraListener()
}
);
const date = new Date();
function paraListener(){
    //window.alert("Hi");
    para.setAttribute("style","background-color:yellow");
    console.log("Hi");
}

btn.addEventListener("click",removeHeading);

function removeHeading(){
    document.querySelector('h2').removeChild();
}