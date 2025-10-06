let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true
});
