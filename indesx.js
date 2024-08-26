const review_container = [...document.querySelectorAll(".review-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

review_container.forEach((item, i) => {
  const items = [...item.children];
  const itemWidth = items[0].getBoundingClientRect().width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollBy({ left: itemWidth, behavior: "smooth" });
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });
});

//  Adding shadow when header will be sticky

document.addEventListener("scroll", function () {
  const headers = document.querySelectorAll(".sticky-top");

  headers.forEach((header) => {
    if (window.scrollY > 0) {
      header.classList.add("header-shadow");
    } else {
      header.classList.remove("header-shadow");
    }
  });
});

//   opening navbar

const menu_btn = document.querySelector(".toggle_menu");
const close_btn = document.querySelector(".cross_btn");
const black_light_bg = document.querySelector(".black_bg");
const side_bar = document.querySelector(".side_bar");

menu_btn.addEventListener("click", () => {
  black_light_bg.classList.add("active");
  side_bar.classList.add("active");
});

close_btn.addEventListener("click", () => {
  black_light_bg.classList.remove("active");
  side_bar.classList.remove("active");
});
