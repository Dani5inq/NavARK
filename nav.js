const barsElement = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

const btnElement = document.querySelector(".btn");
const videoElement = document.querySelector(".video-banner");
const fontAwesome = document.querySelector(".fa-play");

barsElement.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

btnElement.addEventListener("click", () => {
  if (btnElement.classList.contains("pause")) {
    btnElement.classList.remove("pause");
    videoElement.play();

    fontAwesome.classList.add("fa-play");
    fontAwesome.classList.remove("fa-pause");
  } else {
    btnElement.classList.add("pause");
    videoElement.pause();
    fontAwesome.classList.add("fa-pause");
    fontAwesome.classList.remove("fa-play");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

