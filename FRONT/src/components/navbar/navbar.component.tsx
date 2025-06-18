import { memo } from "react";
import imgLosArboles from "../../assets/images-ejemplo/Los_arboles.jpg";
import UserComponent from "./modules/user";
import { Input, Select, SelectItem } from "@heroui/react";
import {
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarViewModel from "./navbar.viewmodel";

const NavbarComponent = memo(() => {
  const { toggleMenu, closeMenu, isMenuOpen, NavLinks } = NavbarViewModel();

  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center bg-gradient-to-br from-gray-950 to-red-900 p-3">
      <div className="flex items-center gap-2 pl-2 py-1 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-2">
          <img
            src={imgLosArboles}
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap text-white">
            Elescarramanmusic
          </span>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 text-white hover:bg-gray-700 rounded-md"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="sm:hidden w-full mt-2 bg-gray-800 rounded-md">
          <div className="flex flex-col p-2">
            <NavLinks isMobile={true} onLinkClick={closeMenu} />
          </div>
        </div>
      )}

      <div className="w-full sm:flex-1">
        <div className="flex w-full bg-transparent p-0">
          <div className="flex items-center justify-center flex-1">
            <div className="hidden sm:flex gap-6">
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center md:justify-end gap-2 mt-2 md:mt-0 ">
            <Input
              classNames={{
                base: "max-w-full md:w-48 lg:w-56 h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Buscar..."
              size="sm"
              startContent={<MagnifyingGlassIcon className="h-5 w-5" />}
              type="search"
            />

            <Select
              aria-label="Selecciona el idioma"
              className="max-w-xs w-32"
              size="sm"
              endContent={<GlobeAmericasIcon className="h-5 w-5" />}
              variant="underlined"
              defaultSelectedKeys={["es"]}
            >
              <SelectItem key="es">Español</SelectItem>
              <SelectItem key="en">English</SelectItem>
              <SelectItem key="fr">Français</SelectItem>
              <SelectItem key="de">Deutsch</SelectItem>
              <SelectItem key="it">Italiano</SelectItem>
              <SelectItem key="pt">Português</SelectItem>
              <SelectItem key="ru">Русский</SelectItem>
              <SelectItem key="ja">日本語</SelectItem>
              <SelectItem key="zh">中文</SelectItem>
            </Select>

            <UserComponent />
          </div>
        </div>
      </div>
    </div>
  );
});

NavbarComponent.displayName = "NavbarComponent";

export default NavbarComponent;
