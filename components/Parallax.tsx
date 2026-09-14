"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// La imagen se escala (no se agranda su caja) para tener margen de
// desplazamiento — así `object-position` sigue encuadrando sobre la caja
// real (tamaño normal del contenedor) y no se distorsiona el recorte.
const SCALE = 1.35;
const MAX_PAN = (SCALE - 1) / 2; // fracción del alto que se puede desplazar sin mostrar borde

/**
 * Fondo con efecto parallax: la imagen se desplaza más lento que el
 * scroll de la página. Movimiento atado al scroll/resize (no a un loop
 * de requestAnimationFrame continuo) y respeta prefers-reduced-motion.
 */
export function Parallax({
  src,
  alt,
  className = "h-[70vh] min-h-[420px]",
  position = "50% 50%",
  speed = 0.4,
  fill = false,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  speed?: number;
  /** Llena el contenedor padre (position:relative + tamaño propio) en vez de definir su propia altura — para usarlo como fondo de un hero. */
  fill?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const compute = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        // Cuanto más se scrollea más allá del borde superior del bloque, más
        // se corre el fondo — directo y proporcional, no atenuado por qué
        // tan visible está (eso hacía el efecto casi imperceptible cuando
        // el bloque es el primero de la página, ya visible al cargar).
        const max = rect.height * MAX_PAN;
        setOffset(Math.max(-max, Math.min(max, -rect.top * speed)));
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={fill ? "absolute inset-0 overflow-hidden" : `relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: position,
          transform: `scale(${SCALE}) translate3d(0, ${offset / SCALE}px, 0)`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
