"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { services } from "@/lib/services";

export function ServiceDock() {
  const pathname = usePathname();
  const [start, setStart] = useState(0);
  const touchX = useRef<number | null>(null);

  const visible = [0, 1, 2].map((offset) => services[(start + offset) % services.length]);

  const shift = (dir: -1 | 1) => {
    setStart((s) => (s + dir + services.length) % services.length);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-3 sm:bottom-5 sm:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-3xl items-center gap-2">
        <button
          type="button"
          onClick={() => shift(-1)}
          className="glass grid h-12 w-10 shrink-0 place-items-center rounded-2xl text-slate-800 sm:w-12"
          aria-label="Servicii anterioare"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div
          className="glass min-w-0 flex-1 rounded-3xl px-2 py-2"
          onTouchStart={(e) => {
            touchX.current = e.changedTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx > 40) shift(-1);
            if (dx < -40) shift(1);
            touchX.current = null;
          }}
        >
          <div className="grid grid-cols-3 gap-1.5">
            {visible.map((service) => {
              const href = `/servicii/${service.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={`${start}-${service.slug}`}
                  href={href}
                  className={`truncate rounded-2xl px-2 py-3 text-center text-[11px] font-medium leading-tight tracking-tight transition sm:text-xs ${
                    active
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white/45 text-slate-700 hover:bg-white/80"
                  }`}
                >
                  {service.shortName}
                </Link>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => shift(1)}
          className="glass grid h-12 w-10 shrink-0 place-items-center rounded-2xl text-slate-800 sm:w-12"
          aria-label="Servicii următoare"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
