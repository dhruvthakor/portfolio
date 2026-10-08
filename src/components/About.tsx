import { about } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeader } from "./ui";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeader
        index="01"
        label="About"
        id="about-title"
        title={
          <>
            Networking background. <span className="text-muted">Support by trade.</span>
          </>
        }
      />
      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-5 text-base leading-relaxed text-ink-2 sm:text-lg md:col-span-6 md:col-start-4">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 40}>
              <p className={i === 0 ? "text-ink" : undefined}>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="md:col-span-3" delay={120}>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 md:grid-cols-1 md:border-t-0 md:border-l md:pl-6 md:pt-0">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
