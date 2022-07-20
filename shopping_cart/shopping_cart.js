/* const lessBtn = document.getElementById("dec-btn")
const lessBtn1 = document.getElementById("dec-btn1")
const lessBtn2 = document.getElementById("dec-btn2")
const incBtn = document.getElementById("inc-btn") */
let totalAmount = document.getElementById("amount")
let totalAmount1 = document.getElementById("amount1")
let totalAmount2 = document.getElementById("amount2")
let j1Tot = document.getElementById("j1tot")
let yzyTot = document.getElementById("yzytot")
let j3Tot = document.getElementById("j3tot")
let finalTot = document.getElementById("fTot")


let counter = 0
let counter1 = 0
let counter2= 0 
let final_prices = 0
var totalPrice = 0
var totalPrice1 = 0
var totalPrice2=0

function increase() {
counter += 1
totalAmount.innerText = counter
totalPrice = counter * 160
j1Tot.innerText ="$" + parseInt(totalPrice)

finalTot.innerText = "$" + calculate()
}

function decrease(){
counter -= 1
totalAmount.innerText = counter
totalPrice = counter * 160
j1Tot.innerText ="$" + parseInt(totalPrice)
finalTot.innerText = "$" + calculate()

 if(counter <= 0 ){
j1Tot.innerText = "$"+ 0

finalTot.innerText = "$" + calculate()
}
}


//These fucntions are for the Yeezys
function increase1() {
    counter1 += 1
    totalAmount1.innerText = counter1
 totalPrice1 = counter1 * 80
    yzyTot.innerText ="$" + totalPrice1
 
    finalTot.innerText = "$" + calculate()
    
    }
    
function decrease1(){
    counter1 -= 1
     totalAmount1.innerText = counter1
     totalPrice1= counter1 * 80
    yzyTot.innerText ="$" + parseInt(totalPrice1)

    finalTot.innerText = "$" + calculate()
if(counter1 <= 0 ){
        totalAmount1.innerText= 0
        yzyTot.innerText = "$"+ 0
       finalTot.innerText = "$" +calculate()
        }}

        
     function increase2() {
        counter2 += 1
        totalAmount2.innerText = counter2
     totalPrice2 = counter2 * 200
        j3Tot.innerText ="$" + totalPrice2
        finalTot.innerText =  "$" +calculate()
        }
        
    function decrease2(){
        counter2 -= 1
         totalAmount2.innerText = counter2
         totalPrice2= counter2 * 200
        j3Tot.innerText ="$" + parseInt(totalPrice2)
        finalTot.innerText = "$" + calculate()
    if(counter2 <= 0 ){
            totalAmount2.innerText= 0
            j3Tot.innerText = "$"+ 0
            j3Tot.innerText ="$" + parseInt(totalPrice2)
            finalTot.innerText = "$" +  calculate()
            }
            
        } 


 function calculate(){
let final = totalPrice + totalPrice1 + totalPrice2
return final
 }
 
