import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { User } from "@heroui/react";
import imgUser from "../../../assets/images-ejemplo/user.png";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import getInitials from "../../../utils/getInitials";

const UserComponent = () => {
  // Datos del usuario
  const names = "Stiven";
  const lastNames = "Ruiz";

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <User
          className="text-white"
          avatarProps={{
            src: imgUser || undefined,
            name: getInitials(names, lastNames),
            showFallback: !imgUser,
          }}
          description="@ElVenón"
          name="Stiven Ruiz"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid px-1 py-2 gap-3">
          <Button variant="flat" size="sm" className="text-md font-semibold">
            Perfil
          </Button>
          <div className="flex gap-2">
            <Button variant="light" color="danger">
              Cerrar sesión
            </Button>
            <Button
              variant="shadow"
              isIconOnly
              className="bg-gray-800 text-white"
            >
              <Cog6ToothIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserComponent;
