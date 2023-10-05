let input = document.getElementById('input');
let submit = document.getElementById('submit');


let dataTasks;
if(localStorage.task!=null){

    dataTasks = JSON.parse(localStorage.task);
}
else{
    dataTasks = [];
}

submit.onclick = function(){
    let newTask = input.value;
    if(input.value !=''){
        dataTasks.push(newTask);
        readData();
    }
    

    //save in local storage*

    localStorage.setItem('task', JSON.stringify(dataTasks));

    
    clearData();
    readData();
}

function clearData(){
    input.value = '';
}

function readData(){
    let tasks = '';
    for (let i= 0; i< dataTasks.length; i++){
        tasks +=`
        <li>
            <input type="checkbox">
                <span>
                    ${dataTasks[i]}
                </span>
        </li>

        `;
    }
    document.getElementById('tasks').innerHTML = tasks;
}
readData();