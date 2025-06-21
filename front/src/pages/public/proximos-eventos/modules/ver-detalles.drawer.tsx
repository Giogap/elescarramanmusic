import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import type { Evento } from "../../../../types/eventos.types";

const VerDetallesDrawer = ({ data }: { data: Evento }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="danger" variant="light" onPress={onOpen}>
        Ver detalles
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          wrapper: "z-[9999]",
          base: "max-w-4xl bg-gradient-to-b from-black to-gray-900 text-white",
        }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl font-bold pt-4">
                Detalles del concierto {data.band}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2">
                  <p>Fecha: {data.date}</p>
                  <p>Hora: {data.time}</p>
                  <p>Lugar: {data.venue}</p>
                  <p>Precio: {data.price}</p>
                  <p>Género: {data.genre}</p>
                  <p>Banda: {data.band}</p>
                  <p>Imagen: {data.image}</p>
                </div>
              </ModalBody>
              <ModalFooter className="flex p-2">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="danger" variant="shadow" onPress={onClose}>
                  Comprar entrada
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default VerDetallesDrawer;
