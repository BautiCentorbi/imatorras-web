export type LineSlug = "don-jose" | "apelacion" | "matorras";

export type Wine = {
  nombre: string;
  varietal: string;
  origen?: string;
  ficha?: {
    vinedo: string;
    cosecha: string;
    crianza: string;
    alcohol: string;
    produccion: string;
    puntos?: number;
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

export const lineas: LineInfo[] = [
  {
    slug: "don-jose",
    linea: "DON JOSÉ",
    wordmark: "don-jose",
    tagClass: "bg-alba/10 text-alba",
    categoria: "Línea premium",
    texto: "Malbec, Pinot Noir, Cabernet Franc y Chardonnay. 12–18 meses en roble francés de primer uso.",
    descripcionLarga:
      "Don José es nuestra línea de mayor expresión: partidas limitadas criadas en roble francés de primer uso, pensadas para guardar. Lleva el nombre de Don José de San Martín — un homenaje directo al hombre que inspira toda la bodega.",
    puntos: 95,
    dark: true,
    bgImage: "/images/Banner-Don_Jose.webp",
    bgPosition: "18% 42%",
    bottleSide: "left",
    vinos: [
      {
        nombre: "Don José Cabernet Franc",
        varietal: "100% Cabernet Franc",
        origen: "San José, Tupungato",
        ficha: {
          vinedo: "Viñedos de 40 años en San José, Tupungato. Suelos franco arenosos a 1200 msnm, espaldero bajo, riego tradicional por surco.",
          cosecha: "Finales de marzo",
          crianza: "12–18 meses en barricas de roble francés de primer uso, 6 meses en botella",
          alcohol: "14,1%",
          produccion: "6.500 botellas",
          puntos: 95,
        },
      },
      { nombre: "Don José Malbec", varietal: "100% Malbec", origen: "San José, Tupungato" },
      { nombre: "Don José Pinot Noir", varietal: "100% Pinot Noir", origen: "Tupungato" },
      { nombre: "Don José Chardonnay", varietal: "100% Chardonnay", origen: "Tupungato" },
    ],
  },
  {
    slug: "apelacion",
    linea: "APELACIÓN",
    wordmark: "apelacion",
    tagClass: "bg-linea-tupungato text-[#e9eef2]",
    categoria: "Línea de finca",
    texto: "San José, El Peral, Tupungato. Viñas de hasta 130 años, espaldero bajo, entre 1100 y 1300 msnm.",
    descripcionLarga:
      "Cada vino de Apelación lleva el nombre de la finca de la que proviene. Es nuestra línea más territorial: el lugar de origen no es un dato en la etiqueta, es el punto de partida de cada decisión enológica.",
    puntos: 94,
    dark: false,
    bgImage: "/images/Banner-Apelacion.webp",
    bgPosition: "70% 45%",
    bottleSide: "right",
    vinos: [
      { nombre: "Apelación San José", varietal: "Malbec · Cabernet Franc", origen: "San José, Tupungato" },
      {
        nombre: "Apelación El Peral",
        varietal: "100% Semillón",
        origen: "El Peral, Tupungato",
        ficha: {
          vinedo: "Viñedo centenario de 130 años en El Peral, Tupungato. Suelos franco arenosos con base aluvional a 1300 msnm, espaldero bajo, riego tradicional por surco.",
          cosecha: "Finales de febrero",
          crianza: "12 meses en ánforas de cemento de 2500 litros sin desborre, 6 meses en botella",
          alcohol: "13,4%",
          produccion: "10.000 botellas",
          puntos: 94,
        },
      },
      { nombre: "Apelación Tupungato", varietal: "Chardonnay · Cabernet Sauvignon", origen: "Tupungato" },
    ],
  },
  {
    slug: "matorras",
    linea: "MATORRAS",
    wordmark: "matorras",
    tagClass: "bg-linea-rosado text-[#5b1523]",
    categoria: "Expresión varietal",
    texto: "Malbec varietal y Rosado de Malbec — jugos liberados sin prensado ni sangría, sin enología invasiva.",
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
        origen: "El Peral y San José, Tupungato",
        ficha: {
          vinedo: "Viñas viejas de El Peral y San José, Tupungato. Suelos de arena y piedras entre 1200 y 1300 msnm, espaldero bajo, riego tradicional por surco.",
          cosecha: "Principios de marzo (cosecha temprana, para aportar estructura y frescura)",
          crianza: "12 meses en huevos de cemento, 4 meses en botella",
          alcohol: "13,3%",
          produccion: "6.000 botellas",
          puntos: 93,
        },
      },
      {
        nombre: "Matorras Rosado de Malbec",
        varietal: "100% Malbec",
        origen: "El Peral y San José, Tupungato",
        ficha: {
          vinedo: "Viñas viejas de El Peral y San José, Tupungato. Suelos de arena y piedras entre 1200 y 1300 msnm.",
          cosecha: "Principios de marzo",
          crianza: "Sin crianza en madera — foco en fruta y frescura",
          alcohol: "13%",
          produccion: "Partida limitada",
          puntos: 93,
        },
      },
    ],
  },
];

export function getLinea(slug: string) {
  return lineas.find((l) => l.slug === slug);
}
