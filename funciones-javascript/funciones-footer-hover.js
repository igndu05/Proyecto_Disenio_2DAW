$(function () {
    $("#footer-mail > a, #footer-phone > a, #conditions > a").hover(
        function () {
            $(this).css({
                "text-decoration": "underline",
                "cursor": "pointer"
            });
        },
        function () {
            $(this).css({
                "text-decoration": "none"
            });
        }
    );
});
