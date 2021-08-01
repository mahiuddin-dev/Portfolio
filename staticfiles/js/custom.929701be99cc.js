(function ($) {
  "use strict";

  /* ----------------------------------------------------------- */
  /*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
    /* ----------------------------------------------------------- */

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

    $(".revealator-delay1").addClass("no-transform");

    /* ----------------------------------------------------------- */
    /*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

    if ($(".grid").length) {
      new CBPGridGallery(document.getElementById("grid-gallery"));
    }

    /* ----------------------------------------------------------- */
    /*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

    $(".grid figure").on("click", function () {
      $("#navbar-collapse-toggle").addClass("hide-header");
    });

    /* ----------------------------------------------------------- */
    /*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */
    $(".nav-close").on("click", function () {
      $("#navbar-collapse-toggle").removeClass("hide-header");
    });

    $(".nav-prev").on("click", function () {
      if ($(".slideshow ul li:first-child").hasClass("current")) {
        $("#navbar-collapse-toggle").removeClass("hide-header");
      }
    });

    $(".nav-next").on("click", function () {
      if ($(".slideshow ul li:last-child").hasClass("current")) {
        $("#navbar-collapse-toggle").removeClass("hide-header");
      }
    });

    /* ----------------------------------------------------------- */
    /*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

    var item = $(".grid li figure");
    var elementsLength = item.length;
    for (var i = 0; i < elementsLength; i++) {
      $(item[i]).hoverdir();
    }

    /* ----------------------------------------------------------- */
    /*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

    $(".contactform").on("submit", function () {
      $(".output_message").text("Sending...");

      var form = $(this);
      $.ajax({
        url: form.attr("action"),
        method: form.attr("method"),
        data: form.serialize(),
        success: function (result) {
          $(".form-inputs").css("display", "none");
          $(".contactform").find(".output_message").addClass("success");
          $(".output_message").text("Message Sent!");
        },
      });
      this.reset();
      return false;
    });
  });

  function stop_videos() {
    var video = document.getElementById("video");
    if (video.paused !== true && video.ended !== true) {
      video.pause();
    }
    $(".youtube-video")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  }

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  STOP VIDEOS
        /* ----------------------------------------------------------- */

    $(".slideshow nav span").on("click", function () {
      stop_videos();
    });
  });

  $(document).keyup(function (e) {
    /* ----------------------------------------------------------- */
    /*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
        /* ----------------------------------------------------------- */
    if (e.keyCode === 27) {
      $(".close-content").click();
      $("#navbar-collapse-toggle").removeClass("hide-header");
      stop_videos();
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      $(".close-content").click();
      $("#navbar-collapse-toggle").removeClass("hide-header");
      stop_videos();
    }
  });
})(jQuery);