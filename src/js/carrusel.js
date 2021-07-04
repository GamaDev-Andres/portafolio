export const interaccionCarrusel = () => {
    new Glider(document.querySelector(".lista-carrusel"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".indicadores-carrusel",
        arrows: {
            prev: ".carrusel-anterior",
            next: ".carrusel-siguiente",
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    duration: 0.75,
                },
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    duration: 0.75,
                },
            },
        ],
    });
    console.log("hola desde otro archivo");
};
