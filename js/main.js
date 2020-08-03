$(".header-closed").click(function(){
    $(".header__contacts").removeClass("header__contacts--active");
    $(".header-shadow").removeClass("header-shadow--active");
});

$(".mob-menu__list").click(function(){
    $(".header__contacts").addClass("header__contacts--active");
    $(".header-shadow").addClass("header-shadow--active");
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});