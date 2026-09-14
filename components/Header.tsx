"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onService = pathname.startsWith("/servicii");

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#2b7de9] text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c2.2 3.1 3.4 6.4 3.4 9.2 0 3.6-1.5 6.6-3.4 10.8-1.9-4.2-3.4-7.2-3.4-10.8C8.6 8.4 9.8 5.1 12 2z" />
            </svg>
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-[#0f2744]">
            DentalClinic
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#5b708b] lg:flex">
          {onService ? (
            <>
              <a href="#despre" className="hover:text-[#0f2744]">
                Despre
              </a>
              <a href="#include" className="hover:text-[#0f2744]">
                Protocol
              </a>
              <a href="#beneficii" className="hover:text-[#0f2744]">
                Beneficii
              </a>
              <a href="#etape" className="hover:text-[#0f2744]">
                Etape
              </a>
              <a href="#preturi" className="hover:text-[#0f2744]">
                Prețuri
              </a>
            </>
          ) : (
            <a href="#servicii" className="hover:text-[#0f2744]">
              Servicii
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0700000000"
            className="hidden items-center gap-2 rounded-full bg-[#2b7de9] px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-200 sm:inline-flex hover:bg-[#1d64c7]"
          >
            Programează-te
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#eef5ff] text-[#0f2744] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicii/${s.slug}`}
              className="block rounded-xl px-2 py-2 text-sm text-[#0f2744]"
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
