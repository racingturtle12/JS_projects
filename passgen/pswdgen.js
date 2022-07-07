
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

function passgen(){
let rando1 = ''
for(let i=0; i < 16; i++){
 rando1 += characters[Math.floor(Math.random() * characters.length )] 
console.log(rando1)
}
pass1El.textContent= rando1

let rando2 = ''
for(let i=0; i < 16; i++){
 rando2 += characters[Math.floor(Math.random() * characters.length )] 
console.log(rando2)
}
pass2El.textContent= rando2
}
 


/*  let rando2 = characters[Math.floor(Math.random() * characters.length )] 
 pass1El.textContent = rando1 
 pass2El.textContent = rando2 */