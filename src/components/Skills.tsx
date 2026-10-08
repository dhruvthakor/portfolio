import { skillGroups } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeader } from "./ui";

// Bento layout: healthcare and support get the most room because they're the core of my work.
const spans: Record<string, string> = {
  support: "lg:col-span-4",
  healthcare: "lg:col-span-2 lg:row-span-2",
  network: "lg:col-span-2",
  systems: "lg:col-span-2",
  people: "lg:col-span-6",
};

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionHeader
        index="05"
        label="Skills"
        id="skills-title"
        title="What I bring to a team."
        intro="Grouped by how I actually use them. Everything here comes from my roles, coursework or certifications."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, i) => {
          const featured = group.id === "healthcare";
          return (
            <Reveal key={group.id} delay={i * 50} className={`${spans[group.id] ?? "lg:col-span-2"} ${group.id === "people" || group.id === "support" ? "sm:col-span-2" : ""}`}>
              <div
                className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 sm:p-7 ${
                  featured
                    ? "border-accent/30 bg-accent-soft"
                    : "border-line bg-surface hover:border-line-strong"
                }`}
              >
                <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-ink-2" : "text-muted"}`}>{group.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2 pt-1 lg:mt-auto">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-[13px] ${
                        featured ? "border-accent/25 bg-surface text-ink" : "border-line bg-bg text-ink-2"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
