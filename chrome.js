let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


/*
// chrome://extensions/ 
let myLeads = []
let myOld = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

console.log(ulEL) 
console.log(inputBtn)

const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    rander(myLeads)
}
 

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow : true}, function(tabs){
        console.log(tabs[0].url)
        let activeTab = tabs[0]
        let activeTabId = active.id 

    })
    
    myLeads.push(tabs[0].url)
    console.log(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    rander(myLeads)
})


function rander(leads){
    let listItem = ""
       for(let i=0;i<leads.length;i++) 
       {
        listItem += 
         `<li>
            <a  target = '_blank ' href='${leads[i]}'>
                ${leads[i]} 
            </a>
        </li>`  
        // const li = document.createElement("li")
        //  li.textContent = myLeads[i]    
        // ulEL.append(li)
            
       }
       ulEL.innerHTML = listItem
    }
   
console.log(leadsFromLocalStorage)

// deleteBtn.addEventListener("dblclick",  function()  {
//     console.log("double click")
//     localStorage.clear()
//     myLeads = []
//     randerLeads()
// })

deleteBtn.addEventListener("click",  function()  {
    console.log("double click")
    localStorage.clear()
    myLeads = [] 
    rander(myLeads)
    
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value="" 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    rander(myLeads)  

    console.log(localStorage.getItem("myLeads"))
})
 
*/