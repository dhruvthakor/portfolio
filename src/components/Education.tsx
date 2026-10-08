import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeader } from "./ui";

export function Education() {
  const [primary, ...rest] = education;

  return (
    <Section id="education" labelledBy="education-title" className="border-t border-line">
      <SectionHeader
        index="06"
        label="Education"
        id="education-title"
        title="Trained in how networks work."
        intro="My Master's gave me a solid understanding of the network layer, so I can tell a connectivity problem from an application or account problem."
      />

      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-10 select-none font-mono text-[9rem] font-semibold leading-none tracking-tighter text-surface-2 sm:text-[13rem]"
            >
              MEng
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] text-accent-ink">
                <GraduationCap className="size-3.5" aria-hidden="true" />
                Graduate degree
              </span>
              <h3 className="mt-8 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {primary.degree}
              </h3>
              <p className="mt-3 text-lg text-ink-2">{primary.school}</p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">{primary.note}</p>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Location</dt>
                  <dd className="mt-1 text-sm">{primary.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Dates</dt>
                  <dd className="mt-1 text-sm">{primary.dates}</dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 lg:col-span-4">
          {rest.map((edu) => (
            <Reveal key={edu.degree}>
              <article className="h-full rounded-2xl border border-line bg-surface p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Undergraduate</span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{edu.degree}</h3>
                <p className="mt-2 text-ink-2">{edu.school}</p>
                <p className="mt-6 font-mono text-xs text-muted">
                  {edu.location} · {edu.dates}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:col-span-12">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Award className="size-4 text-accent" aria-hidden="true" />
              Certificates & coursework
            </h3>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex flex-col justify-between gap-1 border-t border-line py-4 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="text-[15px] text-ink">{c.name}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
