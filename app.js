const sponsorsGrid = document.getElementById("sponsorsGrid");

const socialIcons = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.3v8h3.2z"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2h3.3l-7.2 8.2L22.6 22h-6.5l-5.1-7.1L5.3 22H2l7.7-8.8L1.4 2h6.7l4.6 6.5L18.9 2zm-1.1 18h1.8L7.2 3.9H5.3L17.8 20z"/>
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23 12c0-1.7-.2-3.4-.5-5-.3-1.3-1.3-2.2-2.5-2.4C17.9 4.2 15.6 4 12 4s-5.9.2-7.9.6C3 4.8 2 5.7 1.7 7c-.3 1.6-.5 3.3-.5 5s.2 3.4.5 5c.3 1.3 1.3 2.2 2.5 2.4 2 .4 4.3.6 7.9.6s5.9-.2 7.9-.6c1.2-.2 2.2-1.1 2.5-2.4.3-1.6.5-3.3.5-5zm-13.4 3.3V8.7l6.2 3.3-6.2 3.3z"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.5 3c.2 1.5 1 2.7 2.4 3.4.8.4 1.6.6 2.6.7v2.7c-.9-.1-1.7-.2-2.5-.6-.6-.3-1.2-.8-1.6-1.4v7.5c0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4 2-4.4 4.4-4.4c.4 0 .7 0 1 .1v2.8a2 2 0 0 0-1-.2 2.1 2.1 0 1 0 1.9 2.1V3h3.7z"/>
    </svg>
  `,
  web: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.9 9h-3.1a15.7 15.7 0 0 0-1.7-6.1A8 8 0 0 1 19.9 11zM12 4.1c1.5 1.7 2.6 4.1 3.1 6.9H8.9A12.6 12.6 0 0 1 12 4.1zm-3.1 8h6.2a14.1 14.1 0 0 1-1.6 7.1A8.1 8.1 0 0 1 8.9 12zm-1.5 0H4.1a8 8 0 0 1 5.7-6.1A15.7 15.7 0 0 0 7.4 12zm.2 2h3.1a15.5 15.5 0 0 1 1.7 6.1A8 8 0 0 1 7.6 14zm6.3 0h3.2a8 8 0 0 1-5.6 6.1 15.5 15.5 0 0 0 2.4-6.1zm-6.1-8.9A12.6 12.6 0 0 1 15.1 12H12a11.6 11.6 0 0 0-3.1-6.9z"/>
    </svg>
  `,
};

const platformLabels = {
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
  web: "Sitio web",
};

function renderSocialLinks(socials = {}, sponsorName = "") {
  const activeSocials = Object.entries(socials).filter(
    ([, value]) => typeof value === "string" && value.trim() !== "",
  );

  if (activeSocials.length === 1 && activeSocials[0][0] === "instagram") {
    const instagramUrl = activeSocials[0][1];
    const handle =
      instagramUrl.match(/instagram\.com\/([^/?#]+)/i)?.[1] || sponsorName;

    return `
      <div class="socials socials--single">
        <a
          class="social-link social-link--instagram"
          href="${instagramUrl}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver el Instagram de ${sponsorName}"
        >
          <span class="social-link__icon">${socialIcons.instagram}</span>
          <span class="social-link__copy">
            <strong>Ver en Instagram</strong>
            <small>@${handle}</small>
          </span>
          <span class="social-link__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    `;
  }

  const links = activeSocials
    .map(([key, value]) => {
      const label = platformLabels[key] || key;
      return `
        <a
          class="social-link"
          href="${value}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${label}"
          title="${label}"
        >
          ${socialIcons[key] || "◌"}
        </a>
      `;
    })
    .join("");

  return links ? `<div class="socials">${links}</div>` : "";
}

function getSponsorLogoPath(logo = "") {
  if (!logo) return "";

  const isAbsolutePath =
    /^(?:https?:)?\/\//i.test(logo) ||
    logo.startsWith("data:") ||
    logo.includes("/");
  return isAbsolutePath ? logo : `assets/sponsors/${logo}`;
}

function createSponsorCard(sponsor) {
  const tagline = sponsor.tagline || "Aliado de la carrera";
  const description = sponsor.description
    ? `<p class="sponsor-card__description">${sponsor.description}</p>`
    : "";
  const socials = sponsor.socials || {};
  const logoPath = getSponsorLogoPath(sponsor.logo);
  const logo = logoPath
    ? `
        <img class="sponsor-card__logo" src="${logoPath}" alt="Logo de ${sponsor.name}" />
        <div class="sponsor-card__logo-placeholder" hidden>${sponsor.name}</div>
      `
    : `<div class="sponsor-card__logo-placeholder" aria-label="${sponsor.name}">${sponsor.name}</div>`;

  return `
    <article class="sponsor-card">
      <div class="sponsor-card__logo-wrap">
        ${logo}
      </div>
      <h3 class="sponsor-card__name">${sponsor.name}</h3>
      <p class="sponsor-card__tagline">${tagline}</p>
      ${description}
      ${renderSocialLinks(socials, sponsor.name)}
    </article>
  `;
}

function setupLogoFallbacks() {
  document.querySelectorAll(".sponsor-card__logo").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      const fallback = image.nextElementSibling;
      if (fallback) fallback.hidden = false;
    });
  });
}

async function loadSponsors() {
  try {
    let sponsors;

    if (window.location.protocol === "file:") {
      sponsors = window.SPONSORS;
    } else {
      if (!response.ok) {
        throw new Error(`No se pudo cargar el JSON: ${response.status}`);
      }

      sponsors = await response.json();
    }

    if (!Array.isArray(sponsors) || sponsors.length === 0) {
      sponsorsGrid.innerHTML = `
        <div class="empty-state">
          Aún no hay auspiciadores registrados para esta carrera.
        </div>
      `;
      return;
    }

    sponsorsGrid.innerHTML = sponsors.map(createSponsorCard).join("");
    setupLogoFallbacks();
  } catch (error) {
    console.error(error);
    sponsorsGrid.innerHTML = `
      <div class="empty-state">
        No se pudieron cargar los auspiciadores en este momento.
      </div>
    `;
  }
}

loadSponsors();
