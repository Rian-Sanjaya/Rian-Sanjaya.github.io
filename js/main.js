$(document).ready(function() {
	handleShowHideSidebar();
	handleSideBarMenuClick();
  handleTyping();
	onScrollInit($("#about .description p"), $("#about .description"));
	onScrollInit($(".ag"), $(".animated-group"));
});

$(".photo").waypoint(function(direction) {
	if (direction === "down") {
		$(this).removeClass("fadeOut");
		$(this).addClass("fadeInLeft");
	} else {
		$(this).addClass("fadeOut");
		$(this).removeClass("fadeInLeft");
	}
},
{offset: "90%"});

// $("a.button-available").waypoint(function(direction) {
// 		if (direction === "down") {
// 			$(this).removeClass("fadeOutDownBig");
// 			$(this).addClass("fadeInUpBig");
// 		} else {
// 			$(this).removeClass("fadeInUpBig");
// 			$(this).addClass("fadeOutDownBig");
// 		}
// }, {offset: "80%"});

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
    strings: ["a Software Developer.", "a Web Developer."],
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

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });

    var osTrigger = ( trigger ) ? trigger : osElement;

    osTrigger.waypoint(function(direction) {
			if (direction === "down") {
				osElement.removeClass("fadeOut");
				osElement.addClass("show").addClass(osAnimationClass);
			} else {
					osElement.addClass("fadeOut");
					osElement.removeClass("show").removeClass(osAnimationClass);
			}
    },{
        // triggerOnce: true,
        offset: '90%'
    });
  });
}
