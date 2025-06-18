// Tipos relacionados con bandas

interface Band {
  id: number;
  name: string;
  image?: string;
  genre: string;
  origin: string;
  formed: string;
  members: number;
  albums: number;
}

interface Album {
  id: number;
  name: string;
  releaseDate: string;
  coverImage: string;
  songs: Song[];
}

interface Song {
  id: number;
  title: string;
  duration: string;
  albumId: number;
}

interface BandFilters {
  genre?: string;
  upcomingShows?: boolean;
  followers?: "asc" | "desc";
}

export type { Band, Album, Song, BandFilters };
