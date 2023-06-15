var lastScrollTop = 20;
$(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    if ($(window).width() >= 1024) {
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
    // About Us
    $("#about-nav").click(() => {
        $("#about-nav").toggleClass("active");
        $("#products-nav").removeClass("active");
        $("#products-content").slideUp();
        $("#about-content").slideToggle();
    });
    $("#about-nav").dblclick(() => {
        window.location.href = "about.html";
    });
    // Products
    $("#products-nav").click(() => {
        $("#products-nav").toggleClass("active");
        $("#about-nav").removeClass("active");
        $("#about-content").slideUp();
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
