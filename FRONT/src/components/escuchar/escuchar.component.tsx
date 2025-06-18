import { PlayIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@heroui/tooltip";
import EscucharViewModel from "./escuchar.viewmodel";

const EscucharComponent = ({ uuid }: { uuid: string }) => {
  const { handleEscuchar } = EscucharViewModel();
  return (
    <Tooltip content="Escuchar">
      <button
        onClick={() => handleEscuchar(uuid)}
        className="text-red-500 absolute end-3 top-3 md:end-5 md:top-5 bg-black/50 backdrop-blur-sm rounded-full p-1 md:p-2"
      >
        <PlayIcon className="w-6 h-6" />
      </button>
    </Tooltip>
  );
};

export default EscucharComponent;
