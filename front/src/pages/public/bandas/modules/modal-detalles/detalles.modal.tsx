import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Modal,
  Chip,
} from "@heroui/react";
import {
  CalendarIcon,
  ClockIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import detallesViewModel from "./detalles.viewmodel";
import type { ModalDetallesProps } from "./detalles.type";

const ModalDetalles = ({
  bandId,
  isOpen,
  onOpenChange,
}: ModalDetallesProps) => {
  const { loadInitialData, getBandById } = detallesViewModel();

  useEffect(() => {
    loadInitialData();
  }, []);

  if (!bandId) return null;
  const band = getBandById(bandId);
  if (!band) return null;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      classNames={{
        wrapper: "z-[9999]",
        base: "max-w-4xl bg-gradient-to-b from-black to-gray-900 text-white",
      }}
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-red-400">{band.name}</h2>
              <Button
                color="danger"
                variant="light"
                size="sm"
                isIconOnly
                onPress={onClose}
              >
                ✕
              </Button>
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Información básica */}
                <div>
                  {band.image && (
                    <img
                      src={band.image}
                      alt={band.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Chip color="danger" variant="flat">
                        {band.genre}
                      </Chip>
                      <Chip color="primary" variant="flat">
                        {band.origin}
                      </Chip>
                    </div>
                    <p className="text-gray-300 text-sm">{band.biography}</p>
                  </div>
                </div>
                {/* Detalles */}
                <div className="space-y-6">
                  {/* Información básica */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">
                      Información
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-300">
                        <CalendarIcon className="mr-2 h-4 w-4 text-red-500" />
                        Fundada en {band.formed}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <ClockIcon className="mr-2 h-4 w-4 text-red-500" />
                        {band.members} miembros
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MusicalNoteIcon className="mr-2 h-4 w-4 text-red-500" />
                        {band.albums} álbumes
                      </div>
                    </div>
                  </div>
                  {/* Discografía */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">
                      Discografía
                    </h3>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {band.discography.map((album, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-gray-300">{album.name}</span>
                          <div className="flex items-center gap-2">
                            <Chip size="sm" variant="flat" color="secondary">
                              {album.year}
                            </Chip>
                            <Chip size="sm" variant="flat" color="primary">
                              {album.type}
                            </Chip>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Merch */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                      <ShoppingBagIcon className="mr-2 h-5 w-5" />
                      Merch
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {band.merch.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-sm bg-gray-800 p-2 rounded"
                        >
                          <span className="text-gray-300">{item.name}</span>
                          <span className="text-red-400 font-semibold">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Contacto */}
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                      <EnvelopeIcon className="mr-2 h-5 w-5" />
                      Contacto
                    </h3>
                    <div className="space-y-2 text-sm">
                      {band.contact.email && (
                        <div className="flex items-center text-gray-300">
                          <EnvelopeIcon className="mr-2 h-4 w-4 text-red-500" />
                          {band.contact.email}
                        </div>
                      )}
                      {band.contact.website && (
                        <div className="flex items-center text-gray-300">
                          <GlobeAltIcon className="mr-2 h-4 w-4 text-red-500" />
                          <a
                            href={`https://${band.contact.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:underline"
                          >
                            {band.contact.website}
                          </a>
                        </div>
                      )}
                      {band.contact.socialMedia && (
                        <div className="flex gap-2 mt-2">
                          {band.contact.socialMedia.facebook && (
                            <Chip size="sm" color="primary" variant="flat">
                              Facebook
                            </Chip>
                          )}
                          {band.contact.socialMedia.instagram && (
                            <Chip size="sm" color="secondary" variant="flat">
                              Instagram
                            </Chip>
                          )}
                          {band.contact.socialMedia.twitter && (
                            <Chip size="sm" color="default" variant="flat">
                              Twitter
                            </Chip>
                          )}
                          {band.contact.socialMedia.youtube && (
                            <Chip size="sm" color="danger" variant="flat">
                              YouTube
                            </Chip>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Ver eventos
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalDetalles;
