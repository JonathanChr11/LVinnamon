let $slider = $(".slider-items");
const width = 100;

$(".btn-next").click(() => {
    $slider.animate(
        {
            left: -width + '%',
        },
        "slow",
        () => {
            $(".slider-items :first-child").appendTo($slider);
            $slider.css("left", "0");
        }
    );
});

$(".btn-prev").click(() => {
    $slider.animate(
        {
            left: width + "%",
        },
        "slow",
        () => {
            $(".slider-items :last-child").prependTo($slider);
            $slider.css("left", "0");
        }
    );
});
