import { highlights } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeader } from "./ui";

export function WorkHighlights() {
  return (
    <Section id="work" labelledBy="work-title" className="border-t border-line">
      <SectionHeader
        index="03"
        label="What I work on"
        id="work-title"
        title="Selected work highlights"
        intro="All of these come from my professional roles. They aren't side projects. This is the kind of work I do day to day."
      />
      <ul className="grid overflow-hidden rounded-2xl border border-line bg-line gap-px sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 60} className="bg-surface">
            <div className="group flex h-full flex-col p-7 transition-colors hover:bg-surface-2 sm:p-8">
              <span className="font-mono text-xs text-line-strong transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{item.body}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{item.context}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
