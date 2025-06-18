// Tipos relacionados con usuarios

interface User {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user";
  favoriteBands?: number[]; // IDs de bandas favoritas
  upcomingEventos?: number[]; // IDs de eventos a los que asistirá
  createdAt: Date;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export type { User, AuthState };
