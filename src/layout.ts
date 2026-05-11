import type {
  ExperienceItem,
  PageData,
  Project,
  SkillCategory,
} from "./data/index.ts";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSocialLinks(data: PageData): string {
  return data.siteInfo.socialLinks
    .map((link) =>
      `<a href="${escapeHtml(link.href)}" rel="noreferrer" target="_blank">${
        escapeHtml(link.label)
      }</a>`
    )
    .join("");
}

function renderSkillGroup(group: SkillCategory): string {
  const items = group.skills
    .map((skill) => `<li>${escapeHtml(skill)}</li>`)
    .join("");

  return `
    <article class="glass-card skill-card">
      <h3>${escapeHtml(group.name)}</h3>
      <ul>${items}</ul>
    </article>
  `;
}

function renderProject(project: Project, data: PageData): string {
  const technologies = project.technologies
    .map((technology) => `<span>${escapeHtml(technology)}</span>`)
    .join("");

  return `
    <article class="glass-card project-card">
      <div>
        <p class="eyebrow">${escapeHtml(data.text.selectedProject)}</p>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.summary)}</p>
      </div>
      <p class="project-impact">${escapeHtml(project.impact)}</p>
      <div class="tag-list" aria-label="${
    escapeHtml(data.text.technologiesAria)
  }">${technologies}</div>
    </article>
  `;
}

function renderExperienceStep(item: ExperienceItem): string {
  return `
    <li class="process-step">
      <span aria-hidden="true">${escapeHtml(item.stage)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
      </div>
    </li>
  `;
}

function renderLanguageLinks(data: PageData): string {
  return data.alternateLanguages
    .map((language) => {
      const isCurrent = language.code === data.language;
      return `<a href="${escapeHtml(language.href)}" ${
        isCurrent ? 'aria-current="page"' : ""
      }>${escapeHtml(language.label)}</a>`;
    })
    .join("");
}

function renderNavigation(data: PageData): string {
  return `
    <header class="site-header">
      <nav class="nav-shell" aria-label="${
    escapeHtml(data.text.navigationAria)
  }">
        <a class="brand" href="#top" aria-label="${
    escapeHtml(data.siteInfo.name)
  } ${escapeHtml(data.text.homeAriaSuffix)}">
          <span></span>
          ${escapeHtml(data.siteInfo.name)}
        </a>
        <div class="nav-actions">
          <div class="nav-links">
            <a href="#skills">${escapeHtml(data.text.navigation.skills)}</a>
            <a href="#projects">${escapeHtml(data.text.navigation.projects)}</a>
            <a href="#process">${escapeHtml(data.text.navigation.process)}</a>
            <a href="#contact">${escapeHtml(data.text.navigation.contact)}</a>
          </div>
          <div class="language-switcher" aria-label="${
    escapeHtml(data.text.languageLabel)
  }">${renderLanguageLinks(data)}</div>
        </div>
      </nav>
    </header>
  `;
}

function renderHero(data: PageData): string {
  return `
    <section class="hero section-shell" id="top">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(data.text.heroEyebrow)}</p>
        <h1>${escapeHtml(data.siteInfo.role)}</h1>
        <p class="hero-summary">${escapeHtml(data.siteInfo.summary)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#projects">${
    escapeHtml(data.text.heroPrimaryAction)
  }</a>
          <a class="button secondary" href="mailto:${
    escapeHtml(data.siteInfo.email)
  }">${escapeHtml(data.text.heroSecondaryAction)}</a>
        </div>
      </div>
      <aside class="terminal-card" aria-label="${
    escapeHtml(data.text.snapshotAria)
  }">
        <div class="terminal-header">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <dl>
          <div>
            <dt>${escapeHtml(data.text.snapshot.name)}</dt>
            <dd>${escapeHtml(data.siteInfo.name)} / ${
    escapeHtml(data.siteInfo.handle)
  }</dd>
          </div>
          <div>
            <dt>${escapeHtml(data.text.snapshot.focus)}</dt>
            <dd>${escapeHtml(data.siteInfo.focus)}</dd>
          </div>
          <div>
            <dt>${escapeHtml(data.text.snapshot.stack)}</dt>
            <dd>${escapeHtml(data.siteInfo.stack)}</dd>
          </div>
          <div>
            <dt>${escapeHtml(data.text.snapshot.status)}</dt>
            <dd>${escapeHtml(data.siteInfo.availability)}</dd>
          </div>
        </dl>
      </aside>
    </section>
  `;
}

function renderSkills(data: PageData): string {
  return `
    <section class="section-shell content-section" id="skills">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(data.text.skillsEyebrow)}</p>
        <h2>${escapeHtml(data.text.skillsHeading)}</h2>
      </div>
      <div class="skills-grid">${
    data.skills.map(renderSkillGroup).join("")
  }</div>
    </section>
  `;
}

function renderProjects(data: PageData): string {
  return `
    <section class="section-shell content-section" id="projects">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(data.text.projectsEyebrow)}</p>
        <h2>${escapeHtml(data.text.projectsHeading)}</h2>
      </div>
      <div class="project-grid">${
    data.projects.map((project) => renderProject(project, data)).join("")
  }</div>
    </section>
  `;
}

function renderProcess(data: PageData): string {
  return `
    <section class="section-shell content-section" id="process">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(data.text.processEyebrow)}</p>
        <h2>${escapeHtml(data.text.processHeading)}</h2>
      </div>
      <ol class="process-list">${
    data.experience.map(renderExperienceStep).join("")
  }</ol>
    </section>
  `;
}

function renderContact(data: PageData): string {
  return `
    <section class="contact-band" id="contact">
      <div class="section-shell contact-shell">
        <div>
          <p class="eyebrow">${escapeHtml(data.text.contactEyebrow)}</p>
          <h2>${escapeHtml(data.text.contactHeading)}</h2>
          <p>${escapeHtml(data.siteInfo.location)} · ${
    escapeHtml(data.siteInfo.availability)
  }</p>
        </div>
        <div class="contact-actions">
          <a class="button primary" href="mailto:${
    escapeHtml(data.siteInfo.email)
  }">${escapeHtml(data.siteInfo.email)}</a>
          <div class="social-links">${renderSocialLinks(data)}</div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(data: PageData): string {
  return `
    <footer class="site-footer">
      <p>&copy; ${new Date().getFullYear()} ${
    escapeHtml(data.siteInfo.name)
  }. ${escapeHtml(data.text.footerSuffix)}</p>
    </footer>
  `;
}

export function renderHomePage(data: PageData): string {
  return `<!doctype html>
<html lang="${escapeHtml(data.htmlLang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta
      name="description"
      content="${escapeHtml(data.text.metaDescription)}"
    >
    <title>${escapeHtml(data.siteInfo.name)} | ${
    escapeHtml(data.siteInfo.role)
  }</title>
    <link rel="stylesheet" href="${escapeHtml(data.stylesheet)}">
  </head>
  <body>
    ${renderNavigation(data)}
    <main>
      ${renderHero(data)}
      ${renderSkills(data)}
      ${renderProjects(data)}
      ${renderProcess(data)}
      ${renderContact(data)}
    </main>
    ${renderFooter(data)}
  </body>
</html>`;
}
