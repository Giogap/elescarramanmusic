// Tipos extendidos para el modal de detalles
interface Album {
  name: string;
  year: number;
  type: "Studio" | "Live" | "EP" | "Compilation";
}

interface MerchItem {
  name: string;
  price: string;
  type: "Camiseta" | "CD" | "Vinilo" | "Poster" | "Gorra";
}

interface Contact {
  email?: string;
  phone?: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

interface BandDetails {
  id: number;
  name: string;
  image?: string;
  genre: string;
  origin: string;
  formed: string;
  members: number;
  albums: number;
  biography: string;
  discography: Album[];
  merch: MerchItem[];
  contact: Contact;
}

interface ModalDetallesProps {
  bandId: number | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export type { BandDetails, ModalDetallesProps };
