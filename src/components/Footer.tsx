import { site } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "LinkedIn", href: site.linkedin, external: true },
    { label: "GitHub", href: site.github, external: true },
    { label: "Email", href: `mailto:${site.email}`, external: false },
    { label: "Resume", href: site.resume, external: false },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-ink">{site.name}</p>
          <p className="mt-1">{site.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-ink"
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                  {l.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-xs">© {year} {site.name}</p>
      </Container>
    </footer>
  );
}
