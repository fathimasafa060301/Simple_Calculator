const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+= input;
}

function clear_disply(){
    display.value='';
}

function calculate(){
    display.value=eval(display.value);
}

function delete_display(){
    display.value=display.value.toString().slice(0,-1);
}