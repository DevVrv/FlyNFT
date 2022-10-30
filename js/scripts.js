"use strict";

document.addEventListener('DOMContentLoaded', () => {

    function swiperPerView(breakPoints = Array, Values = Array) {

        // <-- get width
        const width = document.documentElement.getBoundingClientRect().width;
        
        // * make responce
        let responce = 3;

        breakPoints.map((point, index) => {

            if (width <= point) { responce = Values[index]; }

        });

        return responce;

    }
        

    // investors swiper
    const swiper = new Swiper('.swiper', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        
        slidesPerView: swiperPerView([991, 767], [2, 1]),

        

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    // investors says
    const swiperSays = new Swiper('.says__swiper', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    // scroll animations
    new WOW().init();

});