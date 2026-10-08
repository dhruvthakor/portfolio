import { experience } from "@/content/site";
import { ExperienceCard } from "./ExperienceCard";
import { Reveal } from "./Reveal";
import { Section, SectionHeader } from "./ui";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" className="border-t border-line">
      <SectionHeader
        index="02"
        label="Experience"
        id="experience-title"
        title="From the service desk to the hospital floor."
        intro="Each role has added something: patience with customers, accuracy with records, speed on a busy queue, and now the stakes of clinical systems. Select a role to see the details."
      />
      <ol className="relative space-y-6 border-l border-line md:space-y-8 md:border-l-0">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.id} delay={i * 50}>
            <ExperienceCard role={role} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
