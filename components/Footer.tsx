export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 pb-32 pt-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-[#2b7de9] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c2.2 3.1 3.4 6.4 3.4 9.2 0 3.6-1.5 6.6-3.4 10.8-1.9-4.2-3.4-7.2-3.4-10.8C8.6 8.4 9.8 5.1 12 2z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-[#0f2744]">DentalClinic Demo</p>
            <p className="text-sm text-[#5b708b]">Zâmbete mai sănătoase, vieți mai bune.</p>
          </div>
        </div>
        <div className="space-y-1 text-sm text-[#5b708b]">
          <p>Strada Principală nr. 123, Oraș</p>
          <p>
            <a href="tel:0700000000" className="text-[#0f2744]">
              0700 000 000
            </a>
          </p>
          <p>contact@domain.com</p>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-slate-400">
        © 2026 DentalClinic Demo. Toate drepturile rezervate. Tarife orientative.
      </p>
    </footer>
  );
}
