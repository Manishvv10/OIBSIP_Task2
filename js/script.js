// Professional-Skills

// Commmunication
let number=document.getElementById("comm-number");
let counter=0;
setInterval(() => {
    if(counter == 80){
        clearInterval();
    }
    else{
    counter +=1;
    number.innerHTML = counter + "%";
    }
},15)

// Team-Work
let number1=document.getElementById("team-number");
let counter1=0;
setInterval(() => {
    if(counter1 == 90){
        clearInterval();
    }
    else{
    counter1 +=1;
    number1.innerHTML = counter1 + "%";
    }
},14)


// Project-Management
let number2=document.getElementById("proj-number");
let counter2=0;
setInterval(() => {
    if(counter2 == 70){
        clearInterval();
    }
    else{
    counter2 +=1;
    number2.innerHTML = counter2 + "%";
    }
},15)



// Creativity
let number3=document.getElementById("creative-number");
let counter3=0;
setInterval(() => {
    if(counter3 == 75){
        clearInterval();
    }
    else{
    counter3 +=1;
    number3.innerHTML = counter3 + "%";
    }
},15)

