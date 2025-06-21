import imgLosArboles from "../../../assets/images-ejemplo/Los_arboles.jpg";
import imgWc from "../../../assets/images-ejemplo/wc.jpg";
import imgDf from "../../../assets/images-ejemplo/df.jpeg";
import imgTs2 from "../../../assets/images-ejemplo/ts2.jpg";
import imgTsWebp from "../../../assets/images-ejemplo/ts.webp";
import type { Evento } from "../../../types/eventos.types";

const ProximosEventosViewModel = () => {
  // Función para calcular días restantes
  

  // Datos de ejemplo (deberías mover esto a un archivo separado)
  const concerts: Evento[] = [
    {
      id: 1,
      band: "Los Árboles",
      venue: "Madison Square Garden",
      date: "2025-07-15",
      time: "20:00",
      price: "$150",
      image: imgLosArboles,
      genre: "Mondá Metal",
    },
    {
      id: 2,
      band: "Warcry",
      venue: "Wembley Stadium",
      date: "2025-08-22",
      time: "19:30",
      price: "$120",
      image: imgWc,
      genre: "Heavy Metal",
    },
    {
      id: 3,
      band: "Dragonfly",
      venue: "O2 Arena",
      date: "2025-09-05",
      time: "20:30",
      price: "$180",
      image: imgDf,
      genre: "Heavy Metal",
    },
    {
      id: 4,
      band: "Tierra Santa",
      venue: "Wembley Stadium",
      date: "2025-10-05",
      time: "20:30",
      price: "$180",
      image: imgTs2,
      genre: "Heavy Metal",
    },
    {
      id: 5,
      band: "Tierra Santa",
      venue: "Wembley Stadium",
      date: "2025-11-05",
      time: "20:30",
      price: "$180",
      image: imgTsWebp,
      genre: "Heavy Metal",
    },
  ];

  return { concerts };
};

export default ProximosEventosViewModel;
