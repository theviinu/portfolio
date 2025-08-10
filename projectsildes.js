document.querySelectorAll(".web_project-slideshow").forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".slides img");
  let idx = 0;
  slides[idx].classList.add("active");

  function show(n) {
    slides[idx].classList.remove("active");
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add("active");
  }

  slideshow
    .querySelector(".prev")
    .addEventListener("click", () => show(idx - 1));
  slideshow
    .querySelector(".next")
    .addEventListener("click", () => show(idx + 1));

  const fsBtn = slideshow.querySelector(".fullscreen-btn");

  // helper to update icon/text
  function updateFsButton() {
    if (document.fullscreenElement === slideshow) {
      fsBtn.innerHTML =
        '<i style="font-size: 2rem;" class="fa-solid fa-circle-xmark"></i>'; // close icon
      fsBtn.title = "Exit full screen";
    } else {
      fsBtn.innerHTML = '<i class="fa-solid fa-expand"></i> FullScreen'; // full‑screen icon
      fsBtn.title = "Full screen";
    }
  }

  fsBtn.addEventListener("click", () => {
    if (document.fullscreenElement === slideshow) {
      document.exitFullscreen();
    } else {
      slideshow.requestFullscreen();
    }
  });

  // listen for fullscreen changes globally
  document.addEventListener("fullscreenchange", updateFsButton);
});
