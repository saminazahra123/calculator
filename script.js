let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = array.from(buttons);
arr.foreach(button =>{
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        string += e.target.innerHTML;
        input.value = string ;
    })
})