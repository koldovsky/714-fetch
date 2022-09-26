(function() {

    const slides = [
        '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
        '<div><img src="img/banana.svg" alt="Banana"></div>',
        '<div><img src="img/girl.svg" alt="Girl"></div>',
        '<div><img src="img/viking.svg" alt="Viking"></div>'
    ];

    let currentSlideIdx = 0;

    const slideContainer = document.querySelector('.products-carousel .carousel-slides');

    function renderSlide() {
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1>= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1>= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1>= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }
    
    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1 ;
        renderSlide();
    }
    
    renderSlide();

    setInterval(nextSlide, 3000);

    const btnNext = document.querySelector('.products-carousel .btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.products-carousel .btn-prev');
    btnPrev.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide);

})();