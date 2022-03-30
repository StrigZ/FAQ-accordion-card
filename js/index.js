{
  /* <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script> */
}
//Poor perfomance on the Phone

$(".accordion__panel").click(function (e) {
  e.preventDefault();
  for (let el of $(".accordion__panel")) {
    if (this !== el && el.lastElementChild.style.maxHeight) {
      //Poor perfomance on the Phone
      // $(el.lastElementChild).slideUp(200);
      $(el.firstElementChild).removeClass("active");
    }
  }
  if (!$(this).hasClass("active")) {
    //Poor perfomance on the Phone
    // $(this.lastElementChild).slideToggle(200);
    $(this.firstElementChild).toggleClass("active");
    $(this.lastElementChild).css(
      "max-height",
      $(this.lastElementChild)[0].scrollHeight + "px"
    );
  } else {
    $(this.lastElementChild).style.maxHeight =
      $(this.lastElementChild).scrollHeight + "px";
  }

  if ($(this.lastElementChild).css(
      "max-height")) {
      $(this.lastElementChild).css(
      "max-height") = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
});
