import Link from "next/link";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="glass overflow-hidden rounded-[28px] px-6 py-14 sm:px-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Clinică stomatologică · demo
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Medicină dentară clară, într-un spațiu vizual calm.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Zece specialități, același limbaj: diagnostic, etape, beneficii și tarife orientative.
          Navighează din dock-ul de sticlă de jos — câte trei servicii pe ecran.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/servicii/fast-fixed"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white"
          >
            Fast & Fixed în 24h
          </Link>
          <Link
            href="#servicii"
            className="rounded-full bg-white/70 px-5 py-3 text-sm font-medium text-slate-800"
          >
            Toate serviciile
          </Link>
        </div>
      </section>

      <section id="servicii" className="scroll-mt-28 py-8">
        <div className="mb-5 flex items-end justify-between gap-4 px-1">
          <h2 className="text-2xl font-semibold tracking-tight">Servicii</h2>
          <p className="hidden text-sm text-slate-500 sm:block">10 specialități · conținut demo</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className="glass-soft group rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:bg-white/70"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {service.heroKicker}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-slate-950">
                {service.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{service.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
