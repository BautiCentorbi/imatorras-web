export type LineSlug = "don-jose" | "apelacion" | "matorras";

export type Wine = {
  nombre: string;
  varietal: string;
  origen: string;
  ficha: {
    vinedo: string;
    proceso: string;
    cosecha: string;
    crianza: string;
    alcohol: string;
    produccion: string;
    puntos: { critico: string; puntos: number }[];
  };
};

export type LineInfo = {
  slug: LineSlug;
  linea: string;
  wordmark: LineSlug;
  tagClass: string;
  categoria: string;
  texto: string;
  descripcionLarga: string;
  puntos: number;
  dark: boolean;
  bgImage: string;
  bgPosition: string;
  bottleSide: "left" | "right";
  vinos: Wine[];
};

// Datos técnicos tomados de las fichas oficiales por vino
// (public/claude_context/FT-*.pdf) — no del brochure general, que resume
// algunos procesos de forma más laxa. Ante cualquier diferencia entre
// ambos documentos, estas fichas individuales son la fuente de verdad.
export const lineas: LineInfo[] = [
  {
    slug: "don-jose",
    linea: "DON JOSÉ",
    wordmark: "don-jose",
    tagClass: "bg-alba/10 text-alba",
    categoria: "Línea premium",
    texto: "Malbec, Cabernet Franc, Pinot Noir y Chardonnay. Partidas limitadas criadas en roble francés.",
    descripcionLarga:
      "Don José es nuestra línea de mayor expresión: partidas limitadas criadas en roble francés, pensadas para guardar. Lleva el nombre de Don José de San Martín — un homenaje directo al hombre que inspira toda la bodega.",
    puntos: 95,
    dark: true,
    bgImage: "/images/Banner-Don_Jose.webp",
    bgPosition: "18% 42%",
    bottleSide: "left",
    vinos: [
      {
        nombre: "Don José Malbec",
        varietal: "100% Malbec",
        origen: "IG San José",
        ficha: {
          vinedo:
            "Viñedos de 80 años en San José, Tupungato. Suelos franco arenosos con base aluvional a 1200 msnm, conducción en espaldero bajo y riego tradicional por surco.",
          proceso:
            "30% racimo entero, el resto despalillado; maceración larga post-fermentativa. Fermentación con levaduras indígenas en huevos de cemento de 5.000 kg.",
          cosecha: "Finales de marzo",
          crianza: "12–18 meses en barricas de roble francés de 500 L (30% primer uso), 6 meses en botella",
          alcohol: "13,8%",
          produccion: "6.500 botellas",
          puntos: [
            { critico: "James Suckling", puntos: 95 },
            { critico: "Descorchados", puntos: 94 },
            { critico: "Tim Atkin", puntos: 92 },
          ],
        },
      },
      {
        nombre: "Don José Cabernet Franc",
        varietal: "100% Cabernet Franc",
        origen: "IG San José",
        ficha: {
          vinedo:
            "Viñedos de 40 años en San José, Tupungato. Suelos franco arenosos a 1200 msnm, espaldero bajo, riego tradicional por surco.",
          proceso:
            "100% despalillado, maceración larga. Fermentación con levaduras indígenas en huevos de cemento, sin control de temperatura, para favorecer aromas terciarios.",
          cosecha: "Finales de marzo",
          crianza: "12–18 meses en barricas de roble francés de primer uso, 6 meses en botella",
          alcohol: "14,1%",
          produccion: "6.500 botellas",
          puntos: [
            { critico: "Descorchados", puntos: 95 },
            { critico: "James Suckling", puntos: 94 },
            { critico: "Robert Parker", puntos: 93 },
            { critico: "Tim Atkin", puntos: 93 },
          ],
        },
      },
      {
        nombre: "Don José Pinot Noir",
        varietal: "100% Pinot Noir",
        origen: "IG Tupungato",
        ficha: {
          vinedo:
            "Finca Gottardini, Tupungato. Viñedo de 40 años, selección masal de Alto Adige (Piamonte, Italia). Suelos franco arenosos a 1200 msnm, espaldero bajo, riego por surco.",
          proceso:
            "Fermentación con racimo entero y maceraciones largas, con levaduras indígenas en huevos de cemento, sin desborre, con trabajo sobre lías.",
          cosecha: "Mediados de marzo",
          crianza: "12 meses en barricas de roble francés de primer uso, 6 meses en botella",
          alcohol: "13,4%",
          produccion: "6.500 botellas",
          puntos: [
            { critico: "James Suckling", puntos: 92 },
            { critico: "Descorchados", puntos: 92 },
            { critico: "Tim Atkin", puntos: 92 },
          ],
        },
      },
      {
        nombre: "Don José Chardonnay",
        varietal: "100% Chardonnay",
        origen: "IG Tupungato",
        ficha: {
          vinedo:
            "Finca Gottardini, Tupungato. Viñedos de 40 años en espaldero bajo, suelos franco arenosos a 1200 msnm, riego por surco.",
          proceso:
            "Prensado directo de racimo entero en prensa vertical hidráulica. Fermentación con levaduras indígenas en barricas de roble francés de primer uso, en contacto con lías gruesas y finas, sin desborre.",
          cosecha: "Mediados de marzo",
          crianza: "12 meses en barricas de roble francés de primer uso, 6 meses en botella",
          alcohol: "13,3%",
          produccion: "6.500 botellas",
          puntos: [{ critico: "James Suckling", puntos: 93 }],
        },
      },
    ],
  },
  {
    slug: "apelacion",
    linea: "APELACIÓN",
    wordmark: "apelacion",
    tagClass: "bg-linea-tupungato text-[#e9eef2]",
    categoria: "Línea de finca",
    texto: "San José, El Peral y Tupungato. Viñas de hasta 130 años, espaldero bajo, 1200 msnm.",
    descripcionLarga:
      "Cada vino de Apelación lleva el nombre del distrito del que proviene. Es nuestra línea más territorial: el lugar de origen no es un dato en la etiqueta, es el punto de partida de cada decisión enológica.",
    puntos: 94,
    dark: false,
    bgImage: "/images/Banner-Apelacion.webp",
    bgPosition: "70% 45%",
    bottleSide: "right",
    vinos: [
      {
        nombre: "Apelación San José",
        varietal: "100% Malbec",
        origen: "IG San José",
        ficha: {
          vinedo:
            "Viñedo de 80 años en el distrito de San José. Suelos franco arenosos con base aluvional a 1200 msnm, espaldero bajo, riego tradicional por surco.",
          proceso:
            "20% racimo entero, el resto despalillado; maceración post-fermentativa de 20 días. Fermentación con levaduras indígenas en piletas de cemento.",
          cosecha: "Mediados de marzo",
          crianza: "12 meses en barricas de tercer uso, 6 meses en botella",
          alcohol: "13,5%",
          produccion: "10.000 botellas",
          puntos: [
            { critico: "James Suckling", puntos: 94 },
            { critico: "Robert Parker", puntos: 91 },
            { critico: "Descorchados", puntos: 91 },
          ],
        },
      },
      {
        nombre: "Apelación El Peral",
        varietal: "100% Semillón",
        origen: "IG El Peral",
        ficha: {
          vinedo:
            "Viñedo centenario de 130 años en El Peral. Suelos franco arenosos con base aluvional a 1200 msnm, espaldero bajo, riego tradicional por surco.",
          proceso:
            "Prensado directo a racimo entero, con oxidación controlada del mosto. Fermentación con levaduras indígenas en huevos de cemento, lías sin desborre.",
          cosecha: "Finales de febrero",
          crianza: "12 meses en ánforas de cemento de 2.500 L, sin desborre, 6 meses en botella",
          alcohol: "13,4%",
          produccion: "10.000 botellas",
          puntos: [
            { critico: "Descorchados", puntos: 94 },
            { critico: "James Suckling", puntos: 93 },
            { critico: "Robert Parker", puntos: 92 },
          ],
        },
      },
      {
        nombre: "Apelación Tupungato",
        varietal: "Cabernet Sauvignon · Malbec",
        origen: "El Peral y San José",
        ficha: {
          vinedo:
            "Cabernet Sauvignon de El Peral y Malbec de Finca La Meli, San José. Viñedos de 80 años a 1200 msnm, suelos aluvionales de arena y piedras, espaldero bajo, riego por surco.",
          proceso:
            "20% racimo entero, el resto despalillado; maceración post-fermentativa de 20 días. Fermentación separada por varietal, con levaduras indígenas en piletas de cemento.",
          cosecha: "Mediados de marzo",
          crianza: "12 meses en barricas de tercer y cuarto uso, 6 meses en botella",
          alcohol: "14%",
          produccion: "10.000 botellas",
          puntos: [
            { critico: "James Suckling", puntos: 94 },
            { critico: "Robert Parker", puntos: 91 },
            { critico: "Descorchados", puntos: 91 },
          ],
        },
      },
    ],
  },
  {
    slug: "matorras",
    linea: "MATORRAS",
    wordmark: "matorras",
    tagClass: "bg-linea-rosado text-[#5b1523]",
    categoria: "Expresión varietal",
    texto: "Malbec y Rosado de Malbec — jugos liberados sin prensado ni sangría, sin enología invasiva.",
    descripcionLarga:
      "Matorras es la puerta de entrada a la bodega: vinos varietales, honestos y de todos los días, elaborados con la misma filosofía de mínima intervención que el resto de la casa.",
    puntos: 93,
    dark: false,
    bgImage: "/images/Banner-Matorras.webp",
    bgPosition: "14% 60%",
    bottleSide: "left",
    vinos: [
      {
        nombre: "Matorras Malbec",
        varietal: "100% Malbec",
        origen: "El Peral y San José",
        ficha: {
          vinedo:
            "Viñas viejas de El Peral y San José, a 1200 msnm. Suelos aluvionales de arena y piedras, espaldero bajo orientación este, riego tradicional por surco.",
          proceso:
            "100% despalillado, maceración corta de 10 días. Fermentación maloláctica con levaduras indígenas en huevos de cemento.",
          cosecha: "Mediados de marzo",
          crianza: "12 meses en huevos de cemento de 2.000 L, 6 meses en botella",
          alcohol: "13%",
          produccion: "20.000 botellas",
          puntos: [{ critico: "James Suckling", puntos: 92 }],
        },
      },
      {
        nombre: "Matorras Rosado de Malbec",
        varietal: "100% Malbec",
        origen: "El Peral y San José",
        ficha: {
          vinedo: "Viñas viejas de El Peral y San José, a 1200 msnm. Suelos de arena y piedras, espaldero bajo, riego tradicional por surco.",
          proceso:
            "Elaborado sin prensado ni sangría: los jugos se liberan de forma natural durante el encubado de la uva. Fermentación maloláctica con levaduras indígenas en huevos de cemento.",
          cosecha: "Principios de marzo (cosecha temprana, para aportar estructura y frescura)",
          crianza: "12 meses en huevos de cemento, 4 meses en botella",
          alcohol: "13,3%",
          produccion: "6.000 botellas",
          puntos: [
            { critico: "James Suckling", puntos: 93 },
            { critico: "Descorchados", puntos: 92 },
          ],
        },
      },
    ],
  },
];

export function getLinea(slug: string) {
  return lineas.find((l) => l.slug === slug);
}
