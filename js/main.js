$(document).ready(function() {
	handleShowHideSidebar();
	handleSideBarMenuClick();
  handleTyping();
});

function handleShowHideSidebar() {
  var $menuButton = $(".menu-button i"),
      show = "animated slideInLeft",
      hide = "animated slideOutLeft";

  $menuButton.on("click", function() {
    var $sideBar = $("#sidebar");

    if ($sideBar.hasClass("slideInLeft")) {
      $sideBar
        .removeClass(show)
        .addClass(hide)
        .removeClass("hidden");
    } else {
      $sideBar
        .removeClass(hide)
        .addClass(show)
        .removeClass("hidden");
    }
  });
}

function handleSideBarMenuClick() {
  $("#sidebar li a, .about-me a, .my-portfolio a, a.button-available").on("click", function() {
    var href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top
    }, 600);
    $("#sidebar")
      .removeClass("animated slideInLeft")
      .addClass("animated slideOutLeft");
    return false;
  });
}

function handleTyping () {
  $(".element").typed({
    strings: ["a Software Engineer.", "a Web Developer."],
    // typing speed
    typeSpeed: 90,
    // time before typing starts
    starDelay: 200,
    // backspacing speed
    backSpeed: 0,
    // time before backspacing
    backDelay: 600,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });
}