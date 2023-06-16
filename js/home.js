$(document).ready(function () {
    var x = 0;
    $(".btn-next").click(function () {
        x = x <= 100 ? x + 100 : 0;
        $(".slider-items").css("left", -x + "%");
    });

    $(".btn-prev").click(function () {
        x = x >= 100 ? x - 100 : 200;
        $(".slider-items").css("left", -x + "%");
    });
});
