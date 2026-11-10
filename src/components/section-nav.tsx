"use client";

import { useEffect, useState } from "react";

export type NavItem = { id: string; label: string };

export function SectionNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Sections" className="hidden lg:block">
      <ul className="mt-14 space-y-1">
        {items.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em]"
              >
                <span
                  className={`h-px transition-all duration-300 group-hover:w-16 group-hover:bg-fg ${
                    isActive ? "w-16 bg-accent" : "w-8 bg-subtle"
                  }`}
                />
                <span
                  className={`transition-colors group-hover:text-fg ${isActive ? "text-accent" : "text-subtle"}`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
