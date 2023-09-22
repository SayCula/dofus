const ClassesSkins = document.querySelector("#classes-skins");
    ClassesSkins.innerHTML = `

    <div class="slideshow-container">
    <div class="slide fade">
        <img src="../imgs/skins/skins (1).png" alt="Slide 1">
    </div>
    <div class="slide fade">
        <img src="../imgs/skins/skins (2).png" alt="Slide 2">
    </div>
    <div class="slide fade">
        <img src="../imgs/skins/skins (3).png" alt="Slide 3">
    </div>
    <!-- Add more slides as needed -->
    </div>

        `;

        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(index) {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            }
        
            slides.forEach(slide => slide.style.display = 'none');
            slides[slideIndex].style.display = 'block';
        }
        
        function nextSlide() {
            showSlide(slideIndex + 1);
        }
        
        function prevSlide() {
            showSlide(slideIndex - 1);
        }
        
        showSlide(slideIndex);
        setInterval(nextSlide, 5000); // Auto transition every 5 seconds
        