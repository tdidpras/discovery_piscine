$(document).ready(function () {
    // on load
    $("#ft_list").html(document.cookie.replace("list=", ""));

    // add new list
    $(".newBtn").click(function () {
        let dataIn = prompt("New todo list!");
        if (dataIn == '' || dataIn == null) {
            return;
        }
        $("#ft_list").prepend('<div id="item">' + (dataIn) + '</div>');
        console.log("Add: " + dataIn);
        // cookie
        document.cookie = "list=" + $("#ft_list").html();
    });

    $(document).on("click", "div#item", function () {
        if (confirm("Do you want to remove?")) {
            $(this).remove();
            console.log("Remove: " + $(this).text());
            // cookie
            document.cookie = "list=" + $("#ft_list").html();
        }
    });
});
