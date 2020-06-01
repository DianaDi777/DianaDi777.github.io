//btn for mobile screen changes
$(".btnHAM").click(function () {
  $(this).toggleClass("clickHAM");
});

//typograthy sub menu - arrow toggle; colors change and menue collapses
$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});
//margin sub menu
$(".marg-btn").click(function () {
  $("nav ul .marg-show").toggleClass("show1");
  $("nav ul .secondSB").toggleClass("rotate");
});
//colors sub
$(".color-btn").click(function () {
  $("nav ul .color-show").toggleClass("show3");
  $("nav ul .thirdSB").toggleClass("rotate");
});

$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
