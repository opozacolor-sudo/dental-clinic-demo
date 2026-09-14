export function Footer() {
  return (
    <footer className="px-4 pb-32 pt-10 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-slate-900">DentalClinic Demo</p>
          <p className="mt-1 text-sm text-slate-500">Strada Principală nr. 123</p>
        </div>
        <div className="text-sm text-slate-500 sm:text-right">
          <a className="font-medium text-slate-800" href="tel:0700000000">
            0700 000 000
          </a>
          <p className="mt-1">Tarife orientative · site demonstrativ</p>
        </div>
      </div>
    </footer>
  );
}
