var lastScrollTop = 20;
$(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    if ($(window).width() >= 913) {
        if (scrollTop > lastScrollTop) {
            $("#desktop-nav").css("top", "-150px");
        } else {
            $("#desktop-nav").css("top", "0");
        }
    } else {
        if (scrollTop > lastScrollTop) {
            $("#mobile-nav").css("top", "-150px");
        } else {
            $("#mobile-nav").css("top", "0");
        }
    }
    lastScrollTop = scrollTop;
});

// Navbar Dropdown
$(document).ready(function () {
    $("#products-nav").click(() => {
        $("#products-nav").toggleClass("active");
        $("#products-content").slideToggle();
    });
    $("#products-nav").dblclick(() => {
        window.location.href = "products.html";
    });
});

$(document).ready(function () {
    // Navbar Mobile
    $("#nav-toggler").click(() => {
        $("#nav-mobile").slideToggle("slow");
    });
    $("#nav-close-toggler").click(() => {
        $("#nav-mobile").slideToggle("slow");
    });
});
