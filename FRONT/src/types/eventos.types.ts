// Tipos relacionados con eventos

interface Evento {
  id: number;
  band: string;
  image?: string;
  genre: string;
  venue: string;
  date: string;
  time: string;
  price: string;
}

interface EventoFilters {
  genre?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
}

export type { Evento, EventoFilters };
