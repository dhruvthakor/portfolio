import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";
import { Container, LinkedInIcon } from "./ui";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-36">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <span className="text-accent">07</span>
            <span className="mx-2 text-line-strong">/</span>
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
          >
            Need someone who stays calm when the system doesn&apos;t?
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
            I&apos;m open to conversations about IT support, service desk and healthcare technology roles, in Halifax or
            remote. The quickest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send me an email
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <CopyEmail email={site.email} />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-surface p-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Email</dt>
              <dd className="mt-2 break-all text-[15px]">
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="bg-surface p-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">LinkedIn</dt>
              <dd className="mt-2 text-[15px]">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <LinkedInIcon className="size-4" />
                  linkedin.com/in/dhruv234
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div className="bg-surface p-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Location</dt>
              <dd className="mt-2 inline-flex items-center gap-2 text-[15px]">
                <MapPin className="size-4 text-muted" aria-hidden="true" />
                {site.location}
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
