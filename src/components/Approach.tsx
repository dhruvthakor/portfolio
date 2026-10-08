import { approach } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container } from "./ui";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="bg-[#111210] py-20 text-[#f1f1ec] sm:py-28 dark:border-y dark:border-line"
    >
      <Container>
        <header className="mb-14 grid gap-6 sm:mb-20 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#92968e] md:col-span-3 md:pt-3">
            <span className="text-[#4fbf9a]">04</span>
            <span className="mx-2 text-[#353934]">/</span>
            Approach
          </p>
          <div className="md:col-span-9">
            <h2 id="approach-title" className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              How I work through a problem.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a6aaa2] sm:text-lg">
              Whether it's a clinician locked out mid-shift or a customer whose app won't load, I follow the same
              five steps.
            </p>
          </div>
        </header>

        <ol className="grid gap-px overflow-hidden rounded-2xl bg-[#262925] md:grid-cols-5">
          {approach.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 70} className="bg-[#111210]">
              <div className="group relative flex h-full flex-col p-6 transition-colors hover:bg-[#171917] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#4fbf9a]">0{i + 1}</span>
                  {i < approach.length - 1 && (
                    <span aria-hidden="true" className="hidden font-mono text-xs text-[#353934] md:inline">
                      →
                    </span>
                  )}
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight md:mt-14">{item.step}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#a6aaa2]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
