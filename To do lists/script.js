let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let deleteAll = document.querySelector(".delete");
let tasksDiv = document.querySelector(".tasks");


let arrayOfTasks = [];

// check if there is tasks in local storage

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//trigger get data from local storage
getDataFromLocalStorage();

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

tasksDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("Del")) {
    // romeve task from page
    event.target.parentElement.remove();

    // romeve task from local storage

    deleteTaskWith(event.target.parentElement.getAttribute("data-id"));
}
    if(event.target.classList.contains('task')){

        toggleStatuTaskWith(event.target.getAttribute("data-id"))

        event.target.classList.toggle('done')
    }
});

function addTaskToArray(taskText) {
  let task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  arrayOfTasks.push(task);

  addElementsToPageFrom(arrayOfTasks);
  // add tasks to local storage
  addDataLocalStorageForm(arrayOfTasks);

  console.log(arrayOfTasks);
  console.log(JSON.stringify(arrayOfTasks));
}

deleteAll.addEventListener('click',()=>{
  tasksDiv.innerHTML = "";
  localStorage.clear()

})

function addElementsToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";

  arrayOfTasks.forEach((task) => {
    // create main div
    let div = document.createElement("div");
    div.className = "task";

    if (task.completed === true) {
      div.className = "task done";
    }

    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    // crreate Dlete button
    let span = document.createElement("span");

    span.className = "Del";
    span.appendChild(document.createTextNode("delete"));

    // append button

    div.appendChild(span);

    // add task div to task container

    tasksDiv.appendChild(div);
  });
}

function addDataLocalStorageForm(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // for (let i = 0 ; i<arrayOfTasks.length ; i++){
  //     console.log(`${arrayOfTasks[i].id} === ${taskId}`)
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataLocalStorageForm(arrayOfTasks);
}

function toggleStatuTaskWith(taskId){
    for (let i = 0 ; i<arrayOfTasks.length ; i++){
if (arrayOfTasks[i].id == taskId) {
    arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed = false 
    }
  }
  addDataLocalStorageForm(arrayOfTasks)
}