const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    if (task === "") {
        alert("Write your task!");
        return;
    }

    // Create new task (list item)
    const li = document.createElement("li");
    li.textContent = task;

    // Append task to list
    listContainer.appendChild(li);

    // Clear input
    inputBox.value = "";
}

// Toggle "checked" class on click
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
});
