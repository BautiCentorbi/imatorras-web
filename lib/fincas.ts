export type Finca = {
  slug: string;
  apelacion: string;
  tagClass: string;
  nombre: string;
  resumen: string;
  detalle: string;
  altitud: string;
  suelo: string;
  riego: string;
  varietales: string[];
};

export const fincas: Finca[] = [
  {
    slug: "san-jose",
    apelacion: "Apelación San José",
    tagClass: "bg-linea-sanjose text-[#f2e9e9]",
    nombre: "Finca La Meli",
    resumen:
      "Viñas de 40 a 80 años, suelos franco arenosos, 1200 msnm, espaldero bajo y riego tradicional por surco. Cuna del Malbec y el Cabernet Franc.",
    detalle:
      "En el distrito de San José, nuestras viñas encuentran el lugar perfecto para florecer: terroir profundo de altura, con suelos aluvionales y un clima fresco que retrasa la maduración y aporta frescura. Aquí nace el Malbec — el alma de Matorras — y el Cabernet Franc, la variedad emblema de nuestra línea Don José.",
    altitud: "1200 msnm",
    suelo: "Franco arenoso",
    riego: "Tradicional por surco",
    varietales: ["Malbec", "Cabernet Franc"],
  },
  {
    slug: "tupungato",
    apelacion: "Apelación Tupungato",
    tagClass: "bg-linea-tupungato text-[#e9eef2]",
    nombre: "Finca Gottardini",
    resumen:
      "En el corazón de Tupungato. Paisajes de altura que dan origen al Chardonnay y al Cabernet Sauvignon de nuestra línea Apelación.",
    detalle:
      "Ubicada en el corazón de Tupungato, Finca Gottardini es el hogar de nuestras variedades de mayor frescura. Los paisajes de altura y el amplio salto térmico entre el día y la noche producen vinos elegantes y expresivos, con una acidez natural que capta con precisión la tierra mendocina.",
    altitud: "1100 msnm",
    suelo: "Pedregoso, drenaje rápido",
    riego: "Tradicional por surco",
    varietales: ["Chardonnay", "Cabernet Sauvignon"],
  },
  {
    slug: "el-peral",
    apelacion: "Apelación El Peral",
    tagClass: "bg-linea-peral text-[#e8ede4]",
    nombre: "Finca Manoni",
    resumen:
      "Viñedo centenario de 130 años, suelo franco arenoso con base aluvional. Da origen a nuestro Semillón y al Cabernet Sauvignon.",
    detalle:
      "El distrito de El Peral guarda uno de los tesoros de la bodega: un viñedo de Semillón de 130 años, entre los más antiguos del Valle de Uco. Suelos francos arenosos con base aluvional y un microclima único dan lugar a vinos de frescura y estructura poco comunes en la zona.",
    altitud: "1300 msnm",
    suelo: "Franco arenoso con base aluvional",
    riego: "Tradicional por surco",
    varietales: ["Semillón", "Cabernet Sauvignon"],
  },
];
