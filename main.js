document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  let currentIndex = 0;

  function showSlide(index) {
    const card = carousel.querySelector(".card");
    const cardStyle = window.getComputedStyle(card);
    const cardMarginLeft = parseFloat(cardStyle.marginLeft); // Get the left margin of the card
    const cardMarginRight = parseFloat(cardStyle.marginRight); // Get the right margin of the card
    const cardWidth = card.offsetWidth + cardMarginLeft + cardMarginRight; // Calculate total width of the card including margins
    const offset = -index * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  function nextSlide() {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Recalculate offset on window resize
  window.addEventListener("resize", function () {
    showSlide(currentIndex);
  });
});
