import { Check } from "lucide-react";

const steps = [
  { label: "Understand the request", meta: "user · context", done: true },
  { label: "Diagnose the layer", meta: "account · app · network", done: true },
  { label: "Resolve or escalate", meta: "Assyst", done: true },
  { label: "Explain next steps", meta: "plain language", done: false },
];

/** Decorative panel: a monitor trace plus a support checklist. Hidden from assistive tech. */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative">
      <div className="rounded-2xl border border-line bg-surface shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_48px_-24px_rgba(17,18,16,0.18)]">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="font-mono text-[11px] text-muted">support-session</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
            <span className="pulse-dot size-1.5 rounded-full bg-accent" />
            live
          </span>
        </div>

        <div className="px-5 pt-5">
          <div className="relative h-24 overflow-hidden rounded-lg bg-surface-2">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:16px_16px]" />
            <svg viewBox="0 0 320 96" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path
                pathLength={1}
                className="trace-line"
                d="M0 58 H70 L80 58 L88 40 L96 72 L106 18 L116 80 L124 58 H190 L198 58 L206 44 L214 66 L222 58 H320"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <ul className="space-y-1 p-3">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-3 rounded-lg px-2 py-2.5">
              <span
                className={`grid size-6 shrink-0 place-items-center rounded-full border ${
                  step.done ? "border-accent bg-accent text-surface" : "border-line-strong"
                }`}
              >
                {step.done ? (
                  <Check className="size-3.5" strokeWidth={3} />
                ) : (
                  <span className="pulse-dot size-1.5 rounded-full bg-accent" />
                )}
              </span>
              <span className="flex-1 text-sm text-ink">{step.label}</span>
              <span className="hidden font-mono text-[11px] text-muted sm:inline">{step.meta}</span>
              <span className="font-mono text-[11px] text-line-strong">0{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
