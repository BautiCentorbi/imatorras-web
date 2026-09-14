import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GiGrapes } from "react-icons/gi";
import { LuMountain } from "react-icons/lu";

export function WhatsAppIcon({ className }: { className?: string }) {
  return <FaWhatsapp className={className} aria-hidden="true" />;
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return <FiMapPin className={className} aria-hidden="true" />;
}

export function MountainIcon({ className }: { className?: string }) {
  return <LuMountain className={className} aria-hidden="true" />;
}

export function GrapeIcon({ className }: { className?: string }) {
  return <GiGrapes className={className} aria-hidden="true" />;
}
