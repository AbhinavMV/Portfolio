import { Reveal } from "@/components/reveal";
import { SectionNav, type NavItem } from "@/components/section-nav";
import { Spotlight } from "@/components/spotlight";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import {
  about,
  caseStudies,
  education,
  experience,
  metrics,
  profile,
  sideProjects,
  skills,
} from "@/content/profile";

const sections: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected work" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-10 -mx-6 mb-6 bg-bg/80 px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-fg lg:text-subtle">{children}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] leading-5 text-accent">{children}</li>
  );
}

const socialLinks = [
  { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export default function Home() {
  return (
    <>
      <Spotlight />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="mx-auto min-h-screen max-w-6xl px-6 md:px-12 lg:flex lg:justify-between lg:gap-16 lg:px-16">
        <header className="pt-16 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  Building data APIs at Moralis
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                  <a href="/">{profile.name}</a>
                </h1>
              </div>
              <div className="lg:hidden">
                <ThemeToggle />
              </div>
            </div>
            <h2 className="mt-3 text-lg font-medium text-fg sm:text-xl">{profile.role}</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">{profile.tagline}</p>
            <a
              href={profile.resume}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              <DownloadIcon className="size-4" />
              Download resume
            </a>
            <SectionNav items={sections} />
          </div>
          <div className="mt-8 flex items-center gap-5 lg:mt-0">
            <ul className="flex items-center gap-5" aria-label="Social links">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    aria-label={label}
                    title={label}
                    className="block text-subtle transition-colors hover:text-fg"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-auto hidden lg:block">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main id="content" className="pt-20 lg:w-[56%] lg:py-24">
          <section id="about" aria-label="About" className="mb-24 scroll-mt-16 lg:mb-32">
            <SectionHeading>About</SectionHeading>
            <Reveal className="space-y-4 leading-relaxed text-muted">
              {about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-surface p-4 sm:p-5">
                    <dt className="text-xs text-subtle">{m.label}</dt>
                    <dd className="mt-1 whitespace-nowrap font-mono text-base font-medium tracking-tight text-fg sm:text-2xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </section>

          <section id="experience" aria-label="Experience" className="mb-24 scroll-mt-16 lg:mb-32">
            <SectionHeading>Experience</SectionHeading>
            <ol className="space-y-14">
              {experience.map((job) => (
                <li key={job.company}>
                  <Reveal className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                    <p className="pt-1 font-mono text-xs uppercase tracking-wide text-subtle">
                      {job.start} — {job.end}
                    </p>
                    <div>
                      <h3 className="font-medium leading-snug text-fg">
                        {job.role} ·{" "}
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group inline-flex items-baseline gap-1 text-accent"
                          >
                            {job.company}
                            <ArrowUpRightIcon className="size-3.5 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </a>
                        ) : (
                          job.company
                        )}
                      </h3>
                      <p className="mt-0.5 text-sm text-subtle">{job.location}</p>
                      {job.summary && <p className="mt-3 text-sm leading-relaxed text-muted">{job.summary}</p>}
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                        {job.highlights.map((h) => (
                          <li key={h.slice(0, 24)} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2.5 before:bg-accent">
                            {h}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                        {job.stack.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          <section id="work" aria-label="Selected work" className="mb-24 scroll-mt-16 lg:mb-32">
            <SectionHeading>Selected work</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {caseStudies.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.08}>
                  <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50">
                    <h3 className="font-medium text-fg">{c.title}</h3>
                    <dl className="mt-3 flex-1 space-y-3 text-sm leading-relaxed">
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Problem</dt>
                        <dd className="text-muted">{c.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">Approach</dt>
                        <dd className="text-muted">{c.approach}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">Result</dt>
                        <dd className="text-fg">{c.result}</dd>
                      </div>
                    </dl>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="skills" aria-label="Skills" className="mb-24 scroll-mt-16 lg:mb-32">
            <SectionHeading>Skills</SectionHeading>
            <Reveal>
              <dl className="divide-y divide-border">
                {skills.map(({ group, items }) => (
                  <div key={group} className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                    <dt className="font-mono text-xs uppercase tracking-wide text-subtle sm:pt-0.5">{group}</dt>
                    <dd className="text-sm leading-relaxed text-muted">{items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </section>

          <section id="projects" aria-label="Earlier projects" className="mb-24 scroll-mt-16">
            <SectionHeading>Earlier side projects</SectionHeading>
            <Reveal>
              <ul className="divide-y divide-border">
                {sideProjects.map((p) => {
                  const inner = (
                    <>
                      <div className="min-w-0">
                        <p className="font-medium text-fg">
                          {p.name}
                          {p.repo && (
                            <ArrowUpRightIcon className="ml-1 inline size-3.5 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                          )}
                        </p>
                        <p className="text-sm text-muted">{p.desc}</p>
                      </div>
                      <p className="shrink-0 font-mono text-[11px] text-subtle sm:text-right">{p.stack}</p>
                    </>
                  );
                  return (
                    <li key={p.name}>
                      {p.repo ? (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
            <p className="mt-8 text-sm text-subtle">
              {education.degree}, {education.school} · {education.years}
            </p>
          </section>

          <footer className="border-t border-border py-10 text-sm text-subtle">
            <p className="text-base text-fg">Let&apos;s talk.</p>
            <p className="mt-2 max-w-md leading-relaxed">
              Open to backend and data-infrastructure roles. The quickest way to reach me is{" "}
              <a href={`mailto:${profile.email}`} className="text-accent underline-offset-4 hover:underline">
                email
              </a>{" "}
              or{" "}
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer noopener" className="text-accent underline-offset-4 hover:underline">
                LinkedIn
              </a>
              .
            </p>
            <p className="mt-8 font-mono text-[11px]">
              Built with Next.js, TypeScript and Tailwind CSS · © {new Date().getFullYear()} {profile.fullName}
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
