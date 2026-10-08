"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Role } from "@/content/site";

export function ExperienceCard({ role, defaultOpen = false }: { role: Role; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <article className="relative grid gap-4 md:grid-cols-12 md:gap-8">
      {/* Timeline marker */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-2 -ml-[5px] size-[11px] rounded-full border-2 md:hidden ${
          role.current ? "border-accent bg-accent" : "border-line-strong bg-bg"
        }`}
      />

      <div className="pl-6 md:col-span-3 md:pl-0 md:pt-6">
        <p className="font-mono text-xs text-muted">{role.dates}</p>
        <p className="mt-1 font-mono text-xs text-muted">{role.location}</p>
      </div>

      <div
        className={`ml-6 rounded-2xl border bg-surface transition-colors md:col-span-9 md:ml-0 ${
          open ? "border-line-strong" : "border-line hover:border-line-strong"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start gap-4 rounded-2xl p-6 text-left sm:p-7"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{role.company}</h3>
              {role.current && (
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent-ink">
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-ink-2">{role.title}</p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{role.summary}</p>
          </div>
          <span
            aria-hidden="true"
            className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 ${
              open ? "rotate-45 bg-ink text-bg" : "text-ink"
            }`}
          >
            <Plus className="size-4" />
          </span>
          <span className="sr-only">{open ? "Hide details" : "Show details"}</span>
        </button>

        <div id={panelId} className="expand-panel" data-open={open} inert={!open}>
          <div>
            <div className="grid gap-8 border-t border-line px-6 pb-7 pt-6 sm:px-7 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">What I do</h4>
                <ul className="mt-4 space-y-3">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                      <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8 lg:col-span-2">
                {role.highlights && (
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Highlights</h4>
                    <ul className="mt-4 space-y-2.5">
                      {role.highlights.map((h) => (
                        <li key={h} className="border-l-2 border-accent pl-3 text-[15px] leading-snug text-ink">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Tools & focus</h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {role.tools.map((t) => (
                      <li key={t} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-ink-2">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
