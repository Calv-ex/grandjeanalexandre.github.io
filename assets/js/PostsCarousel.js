document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".dot");

  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      update();
    });
  });

  update();
});

let startX = 0;

track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50 && index < slides.length - 1) index++;
  if (diff < -50 && index > 0) index--;

  update();
});
