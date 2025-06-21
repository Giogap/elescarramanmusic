import RequestHttp from "../httpRequest";
import type { Band } from "../../types/bandas.types";
import imgLosArboles from "../../assets/images-ejemplo/Los_arboles.jpg";
import imgWc from "../../assets/images-ejemplo/wc.jpg";
import imgDf from "../../assets/images-ejemplo/df.jpeg";
import imgTs2 from "../../assets/images-ejemplo/ts2.jpg";
import imgTsWebp from "../../assets/images-ejemplo/ts.webp";

const bands: Band[] = [
  {
    id: 1,
    name: "Los Árboles",
    image: imgLosArboles,
    genre: "Mondá Metal",
    origin: "España",
    formed: "1995",
    members: 5,
    albums: 8,
  },
  {
    id: 2,
    name: "Warcry",
    image: imgWc,
    genre: "Heavy Metal",
    origin: "España",
    formed: "2001",
    members: 4,
    albums: 12,
  },
  {
    id: 3,
    name: "Dragonfly",
    image: imgDf,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1997",
    members: 6,
    albums: 6,
  },
  {
    id: 4,
    name: "Tierra Santa",
    image: imgTs2,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1997",
    members: 4,
    albums: 10,
  },
  {
    id: 5,
    name: "Tierra Santa",
    image: imgTsWebp,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1997",
    members: 4,
    albums: 10,
  },
  {
    id: 6,
    name: "Mägo de Oz",
    image: imgLosArboles,
    genre: "Folk Metal",
    origin: "España",
    formed: "1988",
    members: 8,
    albums: 15,
  },
  {
    id: 7,
    name: "Saratoga",
    image: imgWc,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1992",
    members: 5,
    albums: 13,
  },
  {
    id: 8,
    name: "Avalanch",
    image: imgDf,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1993",
    members: 4,
    albums: 9,
  },
  {
    id: 9,
    name: "Stravaganzza",
    image: imgTs2,
    genre: "Heavy Metal",
    origin: "España",
    formed: "2000",
    members: 5,
    albums: 4,
  },
  {
    id: 10,
    name: "Saurom",
    image: imgTsWebp,
    genre: "Folk Metal",
    origin: "España",
    formed: "1996",
    members: 6,
    albums: 11,
  },
  {
    id: 11,
    name: "Lujuria",
    image: imgLosArboles,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1991",
    members: 4,
    albums: 14,
  },
  {
    id: 12,
    name: "Obús",
    image: imgWc,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1981",
    members: 4,
    albums: 12,
  },
  {
    id: 13,
    name: "Baron Rojo",
    image: imgDf,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1980",
    members: 4,
    albums: 10,
  },
  {
    id: 14,
    name: "Ángeles del Infierno",
    image: imgTs2,
    genre: "Heavy Metal",
    origin: "España",
    formed: "1983",
    members: 4,
    albums: 8,
  },
  {
    id: 15,
    name: "Leño",
    image: imgTsWebp,
    genre: "Rock",
    origin: "España",
    formed: "1978",
    members: 3,
    albums: 6,
  },
  {
    id: 16,
    name: "Asfalto",
    image: imgLosArboles,
    genre: "Rock",
    origin: "España",
    formed: "1972",
    members: 4,
    albums: 15,
  },
  {
    id: 17,
    name: "Topo",
    image: imgWc,
    genre: "Rock",
    origin: "España",
    formed: "1978",
    members: 4,
    albums: 8,
  },
  {
    id: 18,
    name: "Coz",
    image: imgDf,
    genre: "Rock",
    origin: "España",
    formed: "1978",
    members: 4,
    albums: 7,
  },
];

const AdapterGetAllBands = async () => {
  const response = await RequestHttp(null, {
    entry: "api/bandas",
    method: "GET",
  });

  if (response.state) {
    return {
      rspHttp: response.responseHttp,
      msg: response.message,
      state: response.state,
      data: response.data || [],
    };
  } else {
    console.log("Retornando datos de ejemplo, borrar else en un futuro");
    return {
      rspHttp: response.responseHttp,
      msg: response.message,
      state: response.state,
      data: bands || [],
    };
  }

  return {
    rspHttp: response.responseHttp,
    msg: response.message,
    state: response.state,
    error: response.error,
  };
};

export { AdapterGetAllBands };
