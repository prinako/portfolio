import { experience, projects, siteInfo, skills } from "./data.ts";
import type { ExperienceItem, Project, SkillCategory } from "./data.ts";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSocialLinks(): string {
  return siteInfo.socialLinks
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

function renderProject(project: Project): string {
  const technologies = project.technologies
    .map((technology) => `<span>${escapeHtml(technology)}</span>`)
    .join("");

  return `
    <article class="glass-card project-card">
      <div>
        <p class="eyebrow">Selected project</p>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.summary)}</p>
      </div>
      <p class="project-impact">${escapeHtml(project.impact)}</p>
      <div class="tag-list" aria-label="Technologies used">${technologies}</div>
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

function renderNavigation(): string {
  return `
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="#top" aria-label="${
    escapeHtml(siteInfo.name)
  } home">
          <span></span>
          ${escapeHtml(siteInfo.name)}
        </a>
        <div class="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  `;
}

function renderHero(): string {
  return `
    <section class="hero section-shell" id="top">
      <div class="hero-copy">
        <p class="eyebrow">AI research + production systems</p>
        <h1>${escapeHtml(siteInfo.role)}</h1>
        <p class="hero-summary">${escapeHtml(siteInfo.summary)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#projects">View work</a>
          <a class="button secondary" href="mailto:${
    escapeHtml(siteInfo.email)
  }">Start a conversation</a>
        </div>
      </div>
      <aside class="terminal-card" aria-label="Profile snapshot">
        <div class="terminal-header">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <dl>
          <div>
            <dt>name</dt>
            <dd>${escapeHtml(siteInfo.name)}</dd>
          </div>
          <div>
            <dt>focus</dt>
            <dd>semantic AI systems</dd>
          </div>
          <div>
            <dt>stack</dt>
            <dd>Deno · PyTorch · Docker · Linux</dd>
          </div>
          <div>
            <dt>status</dt>
            <dd>${escapeHtml(siteInfo.availability)}</dd>
          </div>
        </dl>
      </aside>
    </section>
  `;
}

function renderSkills(): string {
  return `
    <section class="section-shell content-section" id="skills">
      <div class="section-heading">
        <p class="eyebrow">Core capabilities</p>
        <h2>Research depth with infrastructure discipline.</h2>
      </div>
      <div class="skills-grid">${skills.map(renderSkillGroup).join("")}</div>
    </section>
  `;
}

function renderProjects(): string {
  return `
    <section class="section-shell content-section" id="projects">
      <div class="section-heading">
        <p class="eyebrow">Selected systems</p>
        <h2>Projects built for clarity, repeatability, and scale.</h2>
      </div>
      <div class="project-grid">${projects.map(renderProject).join("")}</div>
    </section>
  `;
}

function renderProcess(): string {
  return `
    <section class="section-shell content-section" id="process">
      <div class="section-heading">
        <p class="eyebrow">Workflow</p>
        <h2>A practical path from hypothesis to dependable software.</h2>
      </div>
      <ol class="process-list">${
    experience.map(renderExperienceStep).join("")
  }</ol>
    </section>
  `;
}

function renderContact(): string {
  return `
    <section class="contact-band" id="contact">
      <div class="section-shell contact-shell">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Let’s build a system that makes the research useful.</h2>
          <p>${escapeHtml(siteInfo.location)} · ${
    escapeHtml(siteInfo.availability)
  }</p>
        </div>
        <div class="contact-actions">
          <a class="button primary" href="mailto:${
    escapeHtml(siteInfo.email)
  }">${escapeHtml(siteInfo.email)}</a>
          <div class="social-links">${renderSocialLinks()}</div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <footer class="site-footer">
      <p>&copy; ${new Date().getFullYear()} ${
    escapeHtml(siteInfo.name)
  }. Built with Deno and plain TypeScript.</p>
    </footer>
  `;
}

export function renderHomePage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta
      name="description"
      content="Professional developer portfolio focused on AI research, semantic communication, knowledge distillation, and self-hosted infrastructure."
    >
    <title>${escapeHtml(siteInfo.name)} | ${escapeHtml(siteInfo.role)}</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    ${renderNavigation()}
    <main>
      ${renderHero()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderProcess()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  </body>
</html>`;
}
