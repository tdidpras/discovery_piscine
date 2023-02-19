function tempLoad() {
    document.getElementById("ft_list").innerHTML = document.cookie;
    return;
}

let todoBtn = document.getElementById("newBtn");
// add new list
todoBtn.addEventListener("click", function () {
    let dataIn = prompt("New todo list!");
    if (dataIn == '' || dataIn == null) {
        return;
    }
    let newList = document.createElement("div");
    newList.innerText = dataIn;
    newList.setAttribute("id", "item");
    let listTodo = document.getElementById("ft_list");
    listTodo.insertBefore(newList, listTodo.children[0]);
    console.log(newList, "Add: " + dataIn);
    setCookieList();

});

// remove a list
document.addEventListener('click', function (event) {
    let eventID = event.target.id
    if (eventID == "item" && confirm("Do you want to remove?")) {
        event.target.remove();
        setCookieList();
    }
    return;
});

// cookie
function setCookieList() {
    document.cookie = document.getElementById("ft_list").innerHTML;
}
