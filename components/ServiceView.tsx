import Image from "next/image";
import type { Service } from "@/lib/services";

export function ServiceView({ service }: { service: Service }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
      <section id="despre" className="grid items-center gap-8 py-8 lg:grid-cols-[1.05fr_1fr] lg:py-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2b7de9]">{service.kicker}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0f2744] sm:text-5xl">{service.title}</h1>
          <p className="mt-3 text-lg text-[#5b708b]">{service.subtitle}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#5b708b]">{service.description}</p>
          <a
            href="tel:0700000000"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2b7de9] px-5 py-3 text-sm font-medium text-white hover:bg-[#1d64c7]"
          >
            Programează-te Acum
          </a>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(43,125,233,0.12)]">
            <Image
              src={service.heroImage}
              alt={service.heroAlt}
              width={1400}
              height={800}
              className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
              priority
            />
          </div>
          <div className="mt-4 hidden gap-3 lg:grid">
            {service.highlights.slice(0, 3).map((item) => (
              <div key={item.title} className="card flex items-start gap-3 rounded-2xl px-4 py-3">
                <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-[#eaf3ff] text-[#2b7de9]">✓</span>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-[#5b708b]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="include" className="card rounded-[28px] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">{service.includeTitle}</h2>
        {service.includeIntro ? <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5b708b]">{service.includeIntro}</p> : null}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.includes.map((item) => (
            <article key={item.title} className="rounded-2xl bg-[#f7fbff] p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5b708b]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficii" className="py-10">
        <h2 className="text-2xl font-semibold tracking-tight">{service.whyTitle}</h2>
        {service.whyIntro ? <p className="mt-2 max-w-3xl text-sm text-[#5b708b]">{service.whyIntro}</p> : null}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((item) => (
            <article key={item.title} className="card rounded-2xl p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5b708b]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="etape" className="card rounded-[28px] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">{service.stepsTitle}</h2>
        {service.stepsIntro ? <p className="mt-2 text-sm text-[#5b708b]">{service.stepsIntro}</p> : null}
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {service.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-[#f7fbff] p-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2b7de9] text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5b708b]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 py-10 lg:grid-cols-2">
        <div className="card rounded-[28px] p-6">
          <h2 className="text-xl font-semibold tracking-tight">{service.extraTitle}</h2>
          <ul className="mt-4 space-y-3">
            {service.extraItems.map((item) => (
              <li key={item.title} className="rounded-2xl bg-[#f7fbff] p-4">
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-[#5b708b]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div id="preturi" className="card overflow-hidden rounded-[28px]">
          <div className="p-6 pb-3">
            <h2 className="text-xl font-semibold tracking-tight">Tarife orientative</h2>
            {service.pricingNote ? <p className="mt-1 text-sm text-[#5b708b]">{service.pricingNote}</p> : null}
          </div>
          <table className="w-full text-left text-sm">
            <tbody>
              {service.pricing.map((row) => (
                <tr key={row.name} className="border-t border-slate-100">
                  <td className="px-6 py-3">
                    <p className="font-medium">{row.name}</p>
                    {row.detail ? <p className="text-xs text-[#5b708b]">{row.detail}</p> : null}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-right font-semibold text-[#2b7de9]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
