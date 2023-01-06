let btn = document.getElementById("btn");
let div = document.querySelector("div");

button.addEventListener("click", clickEvent)
button.addEventListener("mouseover", mouseoverEvent);
button.addEventListener("mouseout", mouseoutEvent);

function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "Welcome in the Atos Academy of Cote D'Ivoire !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    div.style.background ="#" + randomColor

}

function mouseoverEvent(){
    div.style.background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRvRAJn25sfeM2KeZxGOyYEbHOc2CdqQ6wtzkeFShjryW_8k3aUH8tJYRyl-pv7VvQPM&usqp=CAU)";
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
    
}