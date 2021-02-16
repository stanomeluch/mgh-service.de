//Carousel

$(function () {
  var i = 0;
  slideCount = 3;
  function timeout() {
    setTimeout(function () {
      $("#quote" + i).animate(
        {
          right: "100%",
        },
        2000
      );

      i++;
      if (i > slideCount - 1) {
        i = 0;
      }

      $("#quote" + i).css("right", "-60%");
      $("#quote" + i).animate(
        {
          right: "0%",
        },
        2000
      );
      timeout();
    }, 7000);
  }
  timeout();
});

//Button

/*To to Top Button  */

let btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
