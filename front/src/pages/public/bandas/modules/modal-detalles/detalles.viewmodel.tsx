import type { BandDetails } from "./detalles.type";

// Array de detalles de bandas
const bandDetails: BandDetails[] = [
  {
    id: 1,
    name: "Los Árboles",
    image: undefined,
    genre: "Mondá Metal",
    origin: "España",
    formed: "1995",
    members: 5,
    albums: 8,
    biography:
      "Los Árboles es una banda de metal español que fusiona elementos del metal tradicional con influencias folklóricas. Conocidos por sus letras poéticas y su energía en vivo, han sido una de las bandas más influyentes del metal español de los años 90 y 2000.",
    discography: [
      { name: "Raíces", year: 1997, type: "Studio" },
      { name: "Hojas Secas", year: 1999, type: "Studio" },
      { name: "Viento del Norte", year: 2001, type: "Studio" },
      { name: "En Vivo", year: 2003, type: "Live" },
      { name: "Nuevos Caminos", year: 2005, type: "Studio" },
      { name: "Antología", year: 2007, type: "Compilation" },
      { name: "Renacer", year: 2010, type: "Studio" },
      { name: "Legado", year: 2015, type: "Studio" },
    ],
    merch: [
      { name: "Camiseta Los Árboles", price: "25€", type: "Camiseta" },
      { name: "CD Raíces", price: "15€", type: "CD" },
      { name: "Vinilo Hojas Secas", price: "30€", type: "Vinilo" },
      { name: "Poster Oficial", price: "8€", type: "Poster" },
    ],
    contact: {
      email: "info@losarboles.com",
      website: "www.losarboles.com",
      socialMedia: {
        facebook: "LosArbolesOficial",
        instagram: "losarbolesband",
        youtube: "LosArbolesTV",
      },
    },
  },
  {
    id: 2,
    name: "Warcry",
    image: undefined,
    genre: "Heavy Metal",
    origin: "España",
    formed: "2001",
    members: 4,
    albums: 12,
    biography:
      "Warcry es una de las bandas más importantes del heavy metal español. Fundada por Víctor García, han mantenido una línea constante de calidad musical y han sido referentes del género en España durante más de dos décadas.",
    discography: [
      { name: "El Sello de los Tiempos", year: 2002, type: "Studio" },
      { name: "Alejandría", year: 2003, type: "Studio" },
      { name: "¿Dónde Está la Luz?", year: 2005, type: "Studio" },
      { name: "La Quinta Esencia", year: 2006, type: "Studio" },
      { name: "Revolución", year: 2008, type: "Studio" },
      { name: "Alfa", year: 2010, type: "Studio" },
      { name: "Omega", year: 2011, type: "Studio" },
      { name: "Inmortal", year: 2013, type: "Studio" },
      { name: "El Retorno del Duende", year: 2015, type: "Studio" },
      { name: "Demon 97", year: 2017, type: "Studio" },
      { name: "Vicisitud", year: 2019, type: "Studio" },
      { name: "El Llamado de la Noche", year: 2022, type: "Studio" },
    ],
    merch: [
      { name: "Camiseta Warcry", price: "22€", type: "Camiseta" },
      { name: "CD Alejamdría", price: "18€", type: "CD" },
      { name: "Vinilo El Sello", price: "35€", type: "Vinilo" },
      { name: "Gorra Warcry", price: "15€", type: "Gorra" },
    ],
    contact: {
      email: "contact@warcry.es",
      website: "www.warcry.es",
      socialMedia: {
        facebook: "WarcryOficial",
        instagram: "warcryband",
        twitter: "WarcryOficial",
        youtube: "WarcryOficial",
      },
    },
  },
  // ... resto de bandas
];

const detallesViewModel = () => {
  const loadInitialData = () => {
    console.log("loadInitialData");
  };

  const getBandById = (bandId: number): BandDetails | undefined => {
    return bandDetails.find((b) => b.id === bandId);
  };

  return {
    loadInitialData,
    getBandById,
  };
};

export default detallesViewModel;
