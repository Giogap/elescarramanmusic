import { useLocation } from "react-router-dom";
import { memo, useCallback, useMemo, useState } from "react";

// Definir los enlaces fuera del componente para evitar recrearlos
const NAV_LINKS = [
  {
    href: "/inicio",
    text: "Inicio",
  },
  {
    href: "/proximos-eventos",
    text: "Próximos eventos",
  },
  {
    href: "/bandas",
    text: "Bandas",
  },
  {
    href: "/contacto",
    text: "Contacto",
  },
  {
    href: "/quienes-somos",
    text: "Quiénes somos",
  },
  // {
  //   href: "/mis-eventos",
  //   text: "Mis eventos",
  // },
];

// Componente separado para los enlaces de navegación
const NavLinks = memo(
  ({
    isMobile = false,
    onLinkClick,
  }: {
    isMobile?: boolean;
    onLinkClick?: () => void;
  }) => {
    const location = useLocation();

    // Memoizar la función que determina si un enlace está activo
    const isLinkActive = useCallback(
      (href: string) => location.pathname === href,
      [location.pathname]
    );

    // Memoizar los enlaces con su estado activo
    const navLinks = useMemo(
      () =>
        NAV_LINKS.map((link) => ({
          ...link,
          isActive: isLinkActive(link.href),
        })),
      [isLinkActive]
    );

    const handleLinkClick = () => {
      if (isMobile && onLinkClick) {
        onLinkClick();
      }
    };

    return (
      <>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className={`hover:scale-105 transition-all duration-200 font-semibold block rounded-sm px-3 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-red-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500 ${
              link.isActive
                ? "bg-red-700 text-white md:bg-transparent md:text-red-700 md:dark:text-red-500 underline underline-offset-4"
                : "text-gray-900"
            } ${isMobile ? "text-white hover:bg-gray-700" : ""}`}
          >
            {link.text}
          </a>
        ))}
      </>
    );
  }
);

NavLinks.displayName = "NavLinks";

const NavbarViewModel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return { toggleMenu, closeMenu, isMenuOpen, NavLinks };
};

export default NavbarViewModel;
