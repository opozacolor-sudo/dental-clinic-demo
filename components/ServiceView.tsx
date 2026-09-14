import type { Service } from "@/lib/services";

export function ServiceView({ service }: { service: Service }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="glass relative overflow-hidden rounded-[28px] px-6 py-12 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
          style={{ background: service.accent }}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {service.heroKicker}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{service.tagline}</p>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-slate-600">{service.description}</p>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass-soft rounded-[28px] p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">Despre tratament</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">{service.longDescription}</p>
        </div>
        <div className="glass-soft rounded-[28px] p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">De reținut</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">
            Conținutul este demonstrativ. Planul real pornește întotdeauna de la consultație,
            imagistică și un diagnostic scris.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-4 px-1 text-xl font-semibold tracking-tight">Beneficii</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <article key={b.title} className="glass-soft rounded-3xl p-5 sm:p-6">
              <h3 className="font-semibold tracking-tight text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 px-1 text-xl font-semibold tracking-tight">Etape</h2>
        <ol className="space-y-3">
          {service.steps.map((step, i) => (
            <li key={step.title} className="glass-soft flex gap-4 rounded-3xl p-5 sm:p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 px-1 text-xl font-semibold tracking-tight">Tarife orientative</h2>
        <div className="glass overflow-hidden rounded-[28px]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/40 text-slate-500">
              <tr>
                <th className="px-5 py-4 font-medium sm:px-6">Serviciu</th>
                <th className="px-5 py-4 font-medium sm:px-6">Preț</th>
              </tr>
            </thead>
            <tbody>
              {service.pricing.map((row) => (
                <tr key={row.name} className="border-t border-white/60">
                  <td className="px-5 py-4 sm:px-6">
                    <span className="font-medium text-slate-800">{row.name}</span>
                    {row.note ? <span className="ml-2 text-xs text-slate-400">{row.note}</span> : null}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900 sm:px-6">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
