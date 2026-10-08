import { ArrowDown, Download, MapPin } from "lucide-react";
import { currently, hero, site } from "@/content/site";
import { Container, GitHubIcon, LinkedInIcon } from "./ui";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="grid-texture pointer-events-none absolute inset-0 -z-10" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 id="hero-title" className="mt-6">
                <span className="block text-lg font-medium tracking-tight text-muted sm:text-xl">{site.name}</span>
                <span className="mt-3 block text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[3.75rem]">
                  {hero.headline}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">{hero.intro}</p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#experience"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  View my experience
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink"
                >
                  Get in touch
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
                <a
                  href={site.resume}
                  download
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download resume <span className="sr-only">(PDF)</span>
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn <span className="sr-only">(opens in a new tab)</span>
                </a>
                {site.github && (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    <GitHubIcon className="size-4" />
                    GitHub <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden="true" />
                  {site.location}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <HeroVisual />
          </Reveal>
        </div>

        <Reveal delay={260}>
          <aside
            aria-label="Currently"
            className="mt-16 grid gap-4 border-y border-line py-6 sm:mt-24 md:grid-cols-12 md:items-center"
          >
            <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted md:col-span-2">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="pulse-dot absolute inset-0 rounded-full bg-accent" />
              </span>
              Currently
            </p>
            <p className="text-base leading-relaxed md:col-span-8">
              <span className="font-medium text-ink">{currently.role}.</span>{" "}
              <span className="text-ink-2">{currently.detail}</span>
            </p>
            <p className="font-mono text-xs text-muted md:col-span-2 md:text-right">{currently.since}</p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
