$(function () {

    $("#menu-button").on("click", function () {

        $("#menu-toggle").prop(
            "checked",
            !$("#menu-toggle").prop("checked")
        );

        $("#menuHamburguesa").toggleClass("active");

    });

    $("#menuHamburguesa a").on("click", function () {
        $("#menuHamburguesa").removeClass("active");
        $("#menu-toggle").prop("checked", false);
    });

    $("a").hover(
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
