const lessBtn = document.getElementById("dec-btn")
const incBtn = document.getElementById("inc-btn")
let totalAmount1 = document.getElementById("amount1")
let j1Tot = document.getElementById("j1tot")
const j1Price = document.getElementById("j1price")
/* let yzyAmount = document.getElementById("amount1")
let j3Amount = document.getElementById("amount2") */
let counter = 0
let counter1 = 0
let counter2= 0 

function increase() {
counter = counter + 1
totalAmount1.innerText = counter
let totalPrice = counter * 160
j1Tot.innerText ="$" + totalPrice
}

function decrease(){
counter -= 1
 totalAmount1.innerText = counter
 totalPrice = counter * 160
j1Tot.innerText ="$" + totalPrice
 
if(counter <= 0 ){
totalAmount1.innerText= 0
j1Tot.innerText = "$"+ 0

}
}