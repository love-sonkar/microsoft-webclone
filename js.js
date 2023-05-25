let backtotop = document.querySelector(".backtotop");
let heightwindow = window.innerHeight;
let cross = document.querySelector(".cross");

cross.addEventListener("click", () => {
  document.querySelector(".container").classList.add("none");
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > heightwindow ||
    document.documentElement.scrollTop > heightwindow
  ) {
    setTimeout(() => {
      if (backtotop.style.display === "block") {
        backtotop.style.display = "none";
      }
    }, 6000);
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
});

backtotop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
