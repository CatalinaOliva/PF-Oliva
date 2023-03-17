window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar2").classList.add("scrolled");
  } else {
    document.querySelector(".navbar2").classList.remove("scrolled");
  }
}