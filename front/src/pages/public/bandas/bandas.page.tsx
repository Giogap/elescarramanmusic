import { useEffect } from "react";
import { Button, Card, Select, SelectItem, Chip } from "@heroui/react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MusicalNoteIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import EscucharComponent from "../../../components/escuchar/escuchar.component";
import ModalDetalles from "./modules/modal-detalles/detalles.modal";
import BandasViewModel from "./bandas.viewmodel";

const Bandas = () => {
  const {
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
  } = BandasViewModel();

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div className="h-screen max-h-[calc(100vh-218px)] lg:max-h-[calc(100vh-118px)] w-full flex flex-col p-4 md:px-8">
      <div className="flex mb-3 justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
            Nuestras Bandas
          </h1>
          <p className="text-sm text-gray-400">
            Descubre las mejores bandas de metal y rock español
          </p>
        </div>
        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <Select
            aria-label="Géneros"
            placeholder="Géneros"
            selectedKeys={selectedGenre ? [selectedGenre] : []}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string;
              setSelectedGenre(value);
              handleFilterChange();
            }}
            className="max-w-lg w-36"
            size="md"
          >
            {genres.map((genre) => (
              <SelectItem key={genre} textValue={genre}>
                {genre}
              </SelectItem>
            ))}
          </Select>

          <Select
            aria-label="Países"
            placeholder="Países"
            selectedKeys={selectedCountry ? [selectedCountry] : []}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string;
              setSelectedCountry(value);
              handleFilterChange();
            }}
            className="max-w-lg w-36"
            size="md"
          >
            {countries.map((country) => (
              <SelectItem key={country} textValue={country}>
                {country}
              </SelectItem>
            ))}
          </Select>

          <div className="flex justify-end items-center">
            <Button
              variant="light"
              size="sm"
              onPress={() => {
                setSelectedGenre("");
                setSelectedCountry("");
                handleFilterChange();
              }}
              isIconOnly
              className="hover:text-red-500 hover:scale-105 transition-all duration-300"
            >
              <XCircleIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid de bandas - 2 filas x 3 columnas con animación */}
      <div className="relative overflow-hidden mb-3 flex-1">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.1 },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 h-full"
          >
            {getCurrentBands().map((band) => (
              <Card
                key={band.id}
                className="bg-black/70 backdrop-blur-sm transition-all hover:bg-black/80 border border-gray-800 h-full cursor-pointer"
                onPress={() => handleBandClick(band)}
              >
                <div className="p-2 px-3 h-full flex flex-col">
                  <div className="flex md:flex-col gap-3 md:gap-1">
                    <EscucharComponent uuid={band.id.toString()} />
                    <img
                      src={band.image}
                      alt={band.name}
                      className="h-10 md:h-36 md:w-full rounded-lg object-cover"
                    />
                    <h3 className="text-base font-bold tracking-tight text-red-400">
                      {band.name}
                    </h3>
                    <Chip color="danger" variant="flat" size="sm">
                      {band.genre}
                    </Chip>
                  </div>
                  <div className="space-y-0.5 mt-1 flex-1">
                    <div className="flex items-center text-gray-300 text-xs">
                      <MapPinIcon className="mr-1 h-3 w-3 text-red-500" />
                      {band.origin}
                    </div>
                    <div className="flex items-center text-gray-300 text-xs">
                      <CalendarIcon className="mr-1 h-3 w-3 text-red-500" />
                      Fundada en {band.formed}
                    </div>
                    <div className="flex items-center text-gray-300 text-xs">
                      <ClockIcon className="mr-1 h-3 w-3 text-red-500" />
                      {band.members} miembros
                    </div>
                    <div className="flex items-center text-gray-300 text-xs">
                      <MusicalNoteIcon className="mr-1 h-3 w-3 text-red-500" />
                      {band.albums} álbumes
                    </div>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <Button
                      color="danger"
                      variant="light"
                      size="sm"
                      className="flex-1 text-xs"
                      onPress={() => handleBandClick(band)}
                    >
                      Ver perfil
                    </Button>
                    <Button
                      color="danger"
                      variant="solid"
                      size="sm"
                      className="flex-1 text-xs"
                    >
                      Ver eventos
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de paginación */}
      <div className="flex items-center justify-center gap-2">
        <Button
          color="danger"
          variant="light"
          size="sm"
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
          startContent={<ChevronLeftIcon className="h-3 w-3" />}
        >
          Anterior
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              color={currentPage === index + 1 ? "danger" : "default"}
              variant={currentPage === index + 1 ? "solid" : "light"}
              size="sm"
              onPress={() => handlePageClick(index + 1)}
              className="w-6 h-6 min-w-0 text-xs"
            >
              {index + 1}
            </Button>
          ))}
        </div>

        <Button
          color="danger"
          variant="light"
          size="sm"
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
          endContent={<ChevronRightIcon className="h-3 w-3" />}
        >
          Siguiente
        </Button>
      </div>

      {/* Información de paginación */}
      <div className="text-center mt-1 text-gray-400 text-xs">
        Página {currentPage} de {totalPages} - Mostrando{" "}
        {getCurrentBands().length} de {filteredBands.length} bandas
        {filteredBands.length !== bands.length && (
          <span className="ml-2">(filtradas de {bands.length} total)</span>
        )}
      </div>

      {/* Modal de detalles de la banda */}
      <ModalDetalles
        bandId={selectedBandId}
        isOpen={showBandDetails}
        onOpenChange={handleModalClose}
      />
    </div>
  );
};

export default Bandas;
