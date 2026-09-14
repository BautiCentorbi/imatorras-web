import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-alba/10 bg-basalto px-6 py-7 sm:flex-row md:px-16">
      <Logo variant="symbol" tone="light" className="h-5 opacity-70" />
      <div className="flex flex-col items-center gap-1 text-[11px] text-alba/40 sm:flex-row sm:gap-4">
        <span>© 2026 Bodega iMatorras — Tupungato, Mendoza, Argentina.</span>
        <span>Beber con moderación.</span>
      </div>
    </footer>
  );
}
