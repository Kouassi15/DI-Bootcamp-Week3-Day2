//1 Retrieve the form and console.log it
let elementform = document.forms[0]
console.log(elementform);

//2 Retrieve the inputs by their id and console.log them.
let elementinput1 = document.getElementById('fname')
console.log(elementinput1);

let elementinput2 = document.getElementById('lname')
console.log(elementinput2);

let elementsubmit = document.getElementById('submit')
console.log(elementsubmit);
//3 Retrieve the inputs by their name attribute and console.log them
let elemAttribut1 = document.getElementsByName('fname')
console.log(elemAttribut1);

let elemAttribut2 = document.getElementsByName('lname')
console.log(elemAttribut2);

//4 When the user submits the form (ie. submit event listener)
//let elem = document.forms[0]
    //elem.event. event.preventDefault()
   let elem = document.getElementById("submit").addEventListener("click", function(event){
    alert('pourquoi ?')
        event.preventDefault()
      }, false);
      console.log(elem);

      function  information(){
        let inputs = document.getElementById('fname').value;
        let input = document.getElementById('lname').value;
         console.log(inputs);
        console.log(input);
      }
    //create li
    let newli = document.createElement("li");
    let ul = document.getElementsByTagName("ul")[0].appendChild(newli);
    let addphrase = document.createTextNode("first name of the user")
     let applphrase = newli.appendChild(addphrase)
       console.log(newli);

       let newli2 = document.createElement("li");
    let ul2 = document.getElementsByTagName("ul")[0].appendChild(newli2);
    let addphrase2 = document.createTextNode("last name of the user")
     let applphrase2 = newli2.appendChild(addphrase2)
       console.log(newli2);
    