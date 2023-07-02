const barsElement = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

barsElement.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
