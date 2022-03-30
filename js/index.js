{
  /* <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script> */
}

$(".accordion__panel").click(function (e) {
  e.preventDefault();
  let h2 = this.firstElementChild;
  let p = this.lastElementChild;

  for (let e of $(".accordion__panel")) {
    if (e !== this) {
      $(e.firstElementChild).removeClass("active");
      $(e.lastElementChild).removeClass("slide");
      $(e.lastElementChild).css("max-height", "0");
    }
  }

  $(h2).toggleClass("active");
  $(p).toggleClass("slide");

  if ($(p).css("max-height")[0] === "0") {
    // console.log($(p)[0].scrollHeight + "px");
    $(p).css("max-height", $(p)[0].scrollHeight + "px");
  } else {
    $(p).css("max-height", "0");
  }
});
