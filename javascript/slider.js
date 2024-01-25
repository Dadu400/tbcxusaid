document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var dotsContainer = document.getElementById('dots-container');
    var currentIndex = 0;
    var interval;

    slides.forEach(function (_, index) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', function () {
            changeSlide(index - currentIndex);
        });
        dotsContainer.appendChild(dot);
    });

    function changeSlide(direction) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');

        document.querySelector('.dot.active').classList.remove('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }

    function startAutoSlide() {
        interval = setInterval(function () {
            changeSlide(1);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    startAutoSlide();

    document.getElementById('next').addEventListener('click', function () {
        changeSlide(1);
        stopAutoSlide();
        startAutoSlide();
    });

    document.getElementById('prev').addEventListener('click', function () {
        changeSlide(-1);
        stopAutoSlide();
        startAutoSlide();
    });

    document.querySelectorAll('.dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
            stopAutoSlide();
            startAutoSlide();
        });
    });
});
