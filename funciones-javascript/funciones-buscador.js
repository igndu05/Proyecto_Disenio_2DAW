$(function () {
    $("#search").on("focusin", function () {
        $(this).css("border", "3px solid lightgreen")
    })

    $("#search").on("focusout", function () {
        $(this).css("border", "1px solid black")
    })
});
