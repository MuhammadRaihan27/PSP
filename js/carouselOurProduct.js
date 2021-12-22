$(".slide").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: ".next-btn",
    prevArrow: ".prev-btn",
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 521,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // {
        //   breakpoint: 757,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },
        // {
        //   breakpoint: 657,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //   },
        // },

    ],
});