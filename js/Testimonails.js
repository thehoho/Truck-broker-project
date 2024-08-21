document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let slidesToShow = window.innerWidth < 840 ? 1 : 2;
  let slideInterval;

  // Function to update the slider position and dots
  function updateSlider() {
    const offset = -currentIndex * 100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}%)`;
    });

    if (window.innerWidth >= 840) {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[Math.floor(currentIndex / slidesToShow)].classList.add("active");
    }
  }

  // Function to automatically slide to the next testimonial
  function autoSlide() {
    currentIndex = (currentIndex + slidesToShow) % slides.length;
    updateSlider();
  }

  // Start the automatic sliding with a set interval
  function startAutoSlide() {
    clearInterval(slideInterval); // Clear any existing interval
    slideInterval = setInterval(autoSlide, 3000); // Restart auto sliding every 3 seconds
  }

  startAutoSlide(); // Initiate the auto-slide when the page loads

  // Dot click event listener
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearInterval(slideInterval); // Stop auto sliding when a dot is clicked
      currentIndex = index * slidesToShow; // Adjust index based on slidesToShow
      updateSlider();
      startAutoSlide(); // Restart auto sliding after click
    });
  });

  // Handle window resize
  function handleResize() {
    slidesToShow = window.innerWidth < 840 ? 1 : 2;
    updateSlider();
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // Touch events for smaller screens
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;

  function touchStart(index) {
    return function (event) {
      clearInterval(slideInterval); // Stop auto sliding when a touch starts
      currentIndex = index;
      startX = getPositionX(event);
      isDragging = true;
      slides.forEach((slide) => slide.classList.add("grabbing"));
    };
  }

  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startX;
      setSliderPosition();
    }
  }

  function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50)
      currentIndex = Math.min(currentIndex + 1, slides.length - 1);
    if (movedBy > 50) currentIndex = Math.max(currentIndex - 1, 0);

    setPositionByIndex();
    prevTranslate = currentTranslate;
    slides.forEach((slide) => slide.classList.remove("grabbing"));

    startAutoSlide(); // Restart auto sliding after touch end
  }

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  function setPositionByIndex() {
    let slidesToShow = window.innerWidth < 840 ? 1 : 2;
    currentTranslate = currentIndex * -100;
    setSliderPosition();
    updateDots(); // Update dots position
  }

  function setSliderPosition() {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${currentTranslate}%)`;
    });
  }

  function updateDots() {
    if (window.innerWidth >= 840) {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[Math.floor(currentIndex / slidesToShow)].classList.add("active");
    }
  }

  slides.forEach((slide, index) => {
    slide.addEventListener("dragstart", (e) => e.preventDefault());

    // Touch events
    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchmove", touchMove);
    slide.addEventListener("touchend", touchEnd);

    // Mouse events
    slide.addEventListener("mousedown", touchStart(index));
    slide.addEventListener("mousemove", touchMove);
    slide.addEventListener("mouseup", touchEnd);
    slide.addEventListener("mouseleave", touchEnd);
  });
});
