"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-[13px] font-semibold tracking-tight text-white">
            DC
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            DentalClinic <span className="font-medium text-slate-500">Demo</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              pathname === "/" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-white/70"
            }`}
          >
            Acasă
          </Link>
          <Link
            href="/#servicii"
            className="rounded-full px-3 py-1.5 text-sm text-slate-600 transition hover:bg-white/70"
          >
            Servicii
          </Link>
          <Link
            href="/servicii/fast-fixed"
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              pathname?.startsWith("/servicii") ? "bg-white/80 text-slate-900" : "text-slate-600 hover:bg-white/70"
            }`}
          >
            Detalii
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0700000000"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white sm:inline-flex"
          >
            0700 000 000
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 text-slate-900 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
          >
            <span className="sr-only">Meniu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden">
          <Link href="/" className="block rounded-xl px-3 py-2 text-sm" onClick={() => setOpen(false)}>
            Acasă
          </Link>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicii/${s.slug}`}
              className="block rounded-xl px-3 py-2 text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              {s.title}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
