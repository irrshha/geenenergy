if ($(".banner-style-one").length) {
  $(".banner-style-one").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    dots: true,
    nav: false,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    active: true,
    smartSpeed: 1000,
    autoplay: 5000,
  });
  $(".banner-carousel-btn .left-btn").on("click", function () {
    $(".banner-style-one").trigger("next.owl.carousel");
    return false;
  });
  $(".banner-carousel-btn .right-btn").on("click", function () {
    $(".banner-style-one").trigger("prev.owl.carousel");
    return false;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var underline = document.querySelector(".underline-animation");
  underline.classList.add("active");
});

window.onscroll = function () {
  stickyNav();
};

var navMain = document.getElementById("navMain");
var sticky = navMain.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navMain.classList.add("sticky");
  } else {
    navMain.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
function countUp() {
  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-target"),
      duration = 2000;

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: duration,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
}
$(document).ready(function () {
  $(window).on("scroll", function () {
    var countersSection =
      $(".counter-section").offset().top - window.innerHeight;
    if ($(window).scrollTop() > countersSection) {
      countUp();
      $(window).off("scroll");
    }
  });
});

$(document).ready(function () {
  // Sync indicators with carousel items on slide
  $("#carouselExampleIndicators").on("slid.bs.carousel", function () {
    var activeIndex = $(this).find(".carousel-item.active").index();
    $(".testimonial .indicators li").removeClass("active");
    $(".testimonial .indicators li").eq(activeIndex).addClass("active");
    $(".testimonial .tabs li").removeClass("active");
    $(".testimonial .tabs li").eq(activeIndex).addClass("active");
  });

  // Click event for indicators
  $(".testimonial .indicators li").click(function () {
    var i = $(this).index();
    $("#carouselExampleIndicators").carousel(i);
  });

  // Click event for tabs
  $(".testimonial .tabs li").click(function () {
    var i = $(this).index();
    $("#carouselExampleIndicators").carousel(i);
  });
});
