const inputBox=document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//function 1 this is called in html only
function addTask()
{
    if(inputBox.value===''){
        alert("please enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
inputBox.value='';
saveData();}
//function 2 called here only
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);
//fucntion 3 called everytime when changes made ie.when toggled and deleted..and also when added for first time
function saveData(){
 localStorage.setItem("data",listContainer.innerHTML);
}
//function 4 called everytime the page loads
function reload()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
reload();