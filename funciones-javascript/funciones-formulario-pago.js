$(function () {
    $("input").on("focusin", function () {
        $(this).css("border", "3px solid lightgreen")
    })

    $("input").on("focusout", function () {
        $(this).css("border", "1px solid black")
    })
});
