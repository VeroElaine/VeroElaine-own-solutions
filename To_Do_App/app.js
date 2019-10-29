
const list = [];
const render = () => {


    const $toDoItem = $("<div>").addClass("to-do-item").text(list[list.length-1]).css("font-style", "italic").css("color", "black");
    $("#sortable").append($toDoItem);

//below will allow the user to sort their list items by clicking it and dragging it up or down.
    const $span = $("<span>").addClass("ui-state-default")
    $("#sortable").append($span);


    const $completedBtn = $("<button>" + "COMPLETE" + "</button>").css("background", "white").css("color", "black");
    $toDoItem.append($completedBtn);

    $completedBtn.on("click", () => {
        $("#completed").append($toDoItem);
        $toDoItem.css("background", "#ED6495");
        $completedBtn.addClass("done-item").text("REMOVE").css("background", "white").css("color", "black").on("click", () => {
            $toDoItem.remove();
        })
    })


}
$(() => {
    $("#submit").css("background", "teal").css("color", "gold");
    $("#to-do-list").css("color", "teal");
    $("#completed").css("color", "#ED6495")

    $("form").on("submit", (event) => {
        const inputValue = $("#input-box").val();
        list.push(inputValue);
        // console.log(inputValue);
        event.preventDefault();
        $(event.currentTarget).trigger("reset")

        render();


    })
})
