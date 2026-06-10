$(function () {
    $("#name, #email, #phone, #username, #passwd").on("focusin", function () {
        $(this).css("border", "3px solid lightgreen")
    })

    $("#name, #email, #phone, #username, #passwd").on("focusout", function () {
        $(this).css("border", "1px solid black")
    })
});
