const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});