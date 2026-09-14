import Link from "next/link";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2b7de9]">DentalClinic Demo</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0f2744] sm:text-5xl">
            Zece specialități. Un zâmbet, planificat clar.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#5b708b]">
            Site demonstrativ după formatele de mobil și desktop: Fast & Fixed, implantologie, estetică, ortodonție și restul serviciilor clinicii.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/servicii/fast-fixed"
              className="rounded-full bg-[#2b7de9] px-5 py-3 text-sm font-medium text-white hover:bg-[#1d64c7]"
            >
              Fast & Fixed în 24h
            </Link>
            <a href="#servicii" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#0f2744] shadow-sm">
              Toate serviciile
            </a>
          </div>
        </div>
        <div className="card overflow-hidden rounded-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/heroes/fast-fixed.jpg" alt="Fast & Fixed" className="h-[280px] w-full object-cover sm:h-[360px]" />
        </div>
      </section>

      <section id="servicii" className="scroll-mt-24 pb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Servicii</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/servicii/${service.slug}`} className="card overflow-hidden rounded-[24px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.heroImage} alt="" className="h-36 w-full object-cover" />
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2b7de9]">{service.kicker}</p>
                <h3 className="mt-1 font-semibold">{service.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-[#5b708b]">{service.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
