import { useState } from "react";
import { AdapterGetAllBands } from "../../../adapters/public/bandas.adapter";
import type { Band } from "../../../types/bandas.types";

const BandasViewModel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedBandId, setSelectedBandId] = useState<number | null>(null);
  const [showBandDetails, setShowBandDetails] = useState(false);
  const [bands, setBands] = useState<Band[]>([]);
  const bandsPerPage = 6;

  // Obtener géneros y países únicos
  const genres = Array.from(new Set(bands.map((band) => band.genre))).sort();
  const countries = Array.from(
    new Set(bands.map((band) => band.origin))
  ).sort();

  // Filtrar bandas
  const filteredBands = bands.filter((band) => {
    const genreMatch = !selectedGenre || band.genre === selectedGenre;
    const countryMatch = !selectedCountry || band.origin === selectedCountry;
    return genreMatch && countryMatch;
  });

  const totalPages = Math.ceil(filteredBands.length / bandsPerPage);

  // Obtener las bandas de la página actual
  const getCurrentBands = () => {
    const startIndex = (currentPage - 1) * bandsPerPage;
    const endIndex = startIndex + bandsPerPage;
    return filteredBands.slice(startIndex, endIndex);
  };

  const handlePreviousPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleBandClick = (band: Band) => {
    setSelectedBandId(band.id);
    setShowBandDetails(true);
  };

  const handleModalClose = (open: boolean) => {
    setShowBandDetails(open);
    if (!open) {
      setSelectedBandId(null);
    }
  };

  // Variantes de animación
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const loadInitialData = async () => {
    console.log("loadInitialData");
    const response = await AdapterGetAllBands();

    if (response.state) {
      console.log("Retornando datos de la API");
      setBands(response.data);
    } else {
      console.log("Retornando datos de ejemplo, borrar else en un futuro");
      setBands(response.data);
    }
  };

  return {
    loadInitialData,
    selectedGenre,
    setSelectedGenre,
    selectedCountry,
    setSelectedCountry,
    handleFilterChange,
    genres,
    countries,
    currentPage,
    totalPages,
    handlePageClick,
    handlePreviousPage,
    handleNextPage,
    handleBandClick,
    showBandDetails,
    handleModalClose,
    getCurrentBands,
    filteredBands,
    direction,
    variants,
    selectedBandId,
    bands,
  };
};

export default BandasViewModel;
