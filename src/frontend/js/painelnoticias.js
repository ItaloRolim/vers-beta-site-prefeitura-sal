document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentSlide = 0;
    let slideInterval;

    // Atualiza os indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.style.opacity = index === currentSlide ? '1' : '0.5';
        });
    }

    // Mostra um slide específico
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        updateIndicators();
    }

    // Próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Inicia o intervalo
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Reinicia o intervalo
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Event Listeners
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Adiciona clique nos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetInterval();
        });
    });

    // Inicia o carrossel
    updateIndicators();
    startInterval();

    // Pausa o carrossel quando o mouse está sobre ele
    const container = document.getElementById('carousel-container');
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', startInterval);
});