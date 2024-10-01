const inputBox = document.querySelector(".inputField");
const con = document.querySelector(".taskContainer");

function addTask() {
    if(inputBox.value === ''){
        alert('Task Cannot be Empty');
    }else{
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        con.append(list);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        list.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

con.addEventListener("click",function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("unchecked");
        saveData();
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",con.innerHTML);
}

function showData(){
    con.innerHTML = localStorage.getItem("data");
}

showData();