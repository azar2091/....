/*=============== SWIPER TESTIMONIAL ============*/
let swiperTestimonial = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
});