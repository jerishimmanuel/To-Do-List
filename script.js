console.log("JS Loaded");
var ul = document.getElementById("list");
var input = document.getElementById("input");
var completed = document.getElementById('completed');
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", add);
function add() {
    var tasktext = input.value.trim();

    if (tasktext === "") {
        alert("Please enter a task");
        return;
    }
    var listitem = document.createElement("li");
    var textNode = document.createTextNode(tasktext);
    listitem.appendChild(textNode);

    var deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete task";
    deletebtn.addEventListener("click", function () {
        listitem.remove();
    });

    var markBtn = document.createElement("button");
    markBtn.textContent = "Mark Completed";
    markBtn.addEventListener("click", function () {
        markCompleted(listitem, tasktext)
    });

    listitem.appendChild(deletebtn);
    listitem.append(markBtn);
    ul.append(listitem);
    input.value = "";
}
function markCompleted(listitem, tasktext) {
    var completedItem = document.createElement("li");
    completedItem.textContent = tasktext + " Completed";
    completed.appendChild(completedItem);
    listitem.remove();
}