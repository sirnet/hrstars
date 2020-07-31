$(".header-closed").click(function(){
    $(".header__contacts").removeClass("header__contacts--active");
    $(".header-shadow").removeClass("header-shadow--active");
});

$(".mob-menu__list").click(function(){
    $(".header__contacts").addClass("header__contacts--active");
    $(".header-shadow").addClass("header-shadow--active");
});