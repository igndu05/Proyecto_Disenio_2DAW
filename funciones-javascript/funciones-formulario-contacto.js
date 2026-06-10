$(function () {
    $("input, textarea").on("focusin", function () {
        $(this).css("border", "3px solid lightgreen")
    })

    $("input, textarea").on("focusout", function () {
        $(this).css("border", "1px solid black")
    })
});
