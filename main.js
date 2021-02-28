let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
});

// with masonry
new Masonry("#post .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// swiper library initialization
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },
    // responsive breakpoints
    breakpoints: {
        '@0': {
            slidesPerView: 2
        },
        // greater than 888px
        '@1.00': {
            slidesPerView: 3
        },
        // greater than 1110px
        '@1.25': {
            slidesPerView: 4
        },
        // 1330px
        '@1.50': {
            slidesPerView: 5
        }
    }
});