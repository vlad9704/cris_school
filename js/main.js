document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menu.setAttribute("aria-expanded", "false");
    }));
  }

  const slider = document.querySelector("[data-slider]");
  if (slider) {
    const slides = [...slider.querySelectorAll(".slide")];
    const dots = slider.querySelector(".slider__dots");
    let current = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", `Показать отзыв ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dots.appendChild(dot);
    });

    const update = () => {
      slides.forEach((s, i) => s.classList.toggle("is-active", i === current));
      dots.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("is-active", i === current));
    };
    const goTo = i => { current = (i + slides.length) % slides.length; update(); };

    slider.querySelector("[data-prev]").addEventListener("click", () => goTo(current - 1));
    slider.querySelector("[data-next]").addEventListener("click", () => goTo(current + 1));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
