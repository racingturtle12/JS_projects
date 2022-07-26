/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* let newestNum = parseFloat(newNum)  */

function converting(){
 let newNum = parseFloat(document.getElementById("num2c").value)
 let numShow = document.getElementsByClassName("nNum")
 let feet1 = document.getElementById("feet")
 let meters1 = document.getElementById("meters")
 let gallons1 = document.getElementById("gallons")
 let liters1 = document.getElementById("liters")
 let pounds1 = document.getElementById("pounds")
 let kilos1 = document.getElementById("kilos")

 for(var i = 0; i < numShow.length; i++){
    numShow[i].innerText=newNum;    // Change the content
    }

 
 let meters = newNum / 3.281
 meters1.innerText=meters.toFixed(3)
 let feet = newNum * 3.281
feet1.innerText = feet.toFixed(3)
 let liters = newNum / 0.264
liters1.innerText=liters.toFixed(3)
 let gallons = newNum * 0.264
gallons1.innerText= gallons.toFixed(3)
 let kilos = newNum / 2.204
kilos1.innerText=kilos.toFixed(3)
 let pounds = newNum * 2.204
pounds1.innerText= pounds.toFixed(3)


}
