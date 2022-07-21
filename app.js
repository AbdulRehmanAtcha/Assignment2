let colours = ['lightblue', 'lightgray','lightslategray', 'lightgrey'];
let random = Math.round(Math.random() *3);
if(random === 0){
    document.getElementById("body").style.backgroundColor = colours[0];
}
else if(random === 1){
    document.getElementById("body").style.backgroundColor = colours[1];
}
else if(random === 2){
    document.getElementById("body").style.backgroundColor = colours[2];
}
else if(random === 3){
    document.getElementById("body").style.backgroundColor = colours[3];
}