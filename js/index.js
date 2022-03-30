{
  /* <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script> */
}
$(".accordion__panel").click(function (e) {
  e.preventDefault();
  for (let el of $(".accordion__panel")) {
    if (this !== el && el.lastElementChild.style.display === "block") {
      $(el.lastElementChild).slideUp(200);
      $(el.firstElementChild).removeClass("active");
    }
  }
  if (!$(this).hasClass("active")) {
    $(this.firstElementChild).toggleClass("active");
    $(this.lastElementChild).slideToggle(200);
  }
});
