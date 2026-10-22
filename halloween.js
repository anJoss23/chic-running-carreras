document.documentElement.classList.add("js");

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const alliesGrid = document.querySelector(".allies__grid");

if (alliesGrid) {
  const farmasiCard = document.createElement("article");
  farmasiCard.className = "ally-card";
  farmasiCard.innerHTML = `
    <div class="ally-card__logo"><img src="assets/sponsors/farmasi.jpeg" alt="Logo de Farmasi" /></div>
    <div>
      <p class="ally-card__label">Consultora @sofyfloresq</p>
      <h3>Farmasi</h3>
      <p>Línea turca de belleza, skincare y nutrición, con la oportunidad de emprender desde casa y crear tu propio equipo.</p>
    </div>
    <a class="ally-card__link" href="https://www.instagram.com/sofyfloresq?exln=ZTBvcG81a245ZzE=" target="_blank" rel="noopener noreferrer">Ver en Instagram <span aria-hidden="true">→</span></a>
  `;
  alliesGrid.append(farmasiCard);
}

const countdown = document.querySelector("[data-event-date]");

if (countdown) {
  const eventDate = new Date(countdown.dataset.eventDate);
  const updateCountdown = () => {
    const difference = eventDate.getTime() - Date.now();

    if (difference <= 0) {
      countdown.innerHTML = "<p>Halloween Run ya est&aacute; en marcha. &iexcl;Disfruta la experiencia!</p>";
      return;
    }

    const minutes = Math.floor(difference / 60000);
    const values = {
      days: Math.floor(minutes / 1440),
      hours: Math.floor((minutes % 1440) / 60),
      minutes: minutes % 60,
      seconds: Math.floor((difference % 60000) / 1000),
    };

    Object.entries(values).forEach(([unit, value]) => {
      const target = countdown.querySelector(`[data-countdown="${unit}"]`);
      if (target) target.textContent = String(value).padStart(2, "0");
    });
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

const createSparkles = (x, y) => {
  const colors = ["#ef5f9f", "#ffbf75", "#ffffff", "#b98bd5"];

  Array.from({ length: 14 }).forEach((_, index) => {
    const sparkle = document.createElement("i");
    const angle = (Math.PI * 2 * index) / 14;
    const distance = 34 + Math.random() * 42;

    sparkle.className = "signup-sparkle";
    sparkle.style.setProperty("--x", `${x}px`);
    sparkle.style.setProperty("--y", `${y}px`);
    sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    sparkle.style.setProperty("--color", colors[index % colors.length]);
    document.body.append(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove());
  });
};

document.querySelectorAll(".signup-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const bounds = link.getBoundingClientRect();
    createSparkles(event.clientX || bounds.left + bounds.width / 2, event.clientY || bounds.top + bounds.height / 2);
  });
});
