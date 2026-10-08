import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Fades content in as it scrolls into view using CSS scroll-driven animations.
 * No JavaScript: content is always visible where the feature is unsupported,
 * and prefers-reduced-motion disables it in globals.css.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number; // kept for API compatibility; scroll-driven reveals don't need delays
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
