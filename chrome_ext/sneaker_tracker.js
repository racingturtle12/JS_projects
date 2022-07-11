let mySneakers = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("mySneakers") ) // JSON parse cahnges string -> array and stringify changes array ->  string
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
  mySneakers = leadsFromLocalStorage
    render(mySneakers) 
}


tabBtn.addEventListener("click", function(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    mySneakers.push(tabs[0].url)
    localStorage.setItem("mySneakers", JSON.stringify(mySneakers)) 
    render(mySneakers)
})
})


function render(leads){
    let listItems = " "
    for(let i=0; i< leads.length; i++){
    
    listItems += 
    `
    <li>
        <a target ='_blank' href= '${leads[i]}'> 
            ${leads[i]}
        </a>
    </li>
    `
    
    }
    ulEl.innerHTML = listItems 
    } 
    

deleteBtn.addEventListener("dblclick", function(){

    localStorage.clear()  // localstorage is now cleared
    mySneakers= []
    render(mySneakers)   // render  will now be zero becasue of the assignment of mySneakers = []

})




btnEl.addEventListener("click", function(){
mySneakers.push(inputEl.value)
inputEl.value = ""
localStorage.setItem("mySneakers", JSON.stringify(mySneakers)) //saving leads in local storage 

render(mySneakers)
})






//what it looked like before template string / literals (line 23ish)
  // listItems += "<li><a target='_blank' href='" + mySneakers[i] + "'>" + mySneakers[i] + "</a></li>"




//Another way to do it using createElement() and .append() -- line 15 ish
/* let lx = document.createElement("li")
lx.textContent = mySneakers[i]
ulEl.append(lx)
 */

//take your arguemtent outside -- aruguemts are outside of the fucntion