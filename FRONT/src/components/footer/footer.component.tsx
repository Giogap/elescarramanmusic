import { memo } from "react";

const FooterComponent = memo(() => {
  return (
    <footer className="w-full border-t border-divider bg-background bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 py-1 md:py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4">
          <div className="text-sm text-default-500">
            © 2025{" "}
            <a href="#" className="text-primary hover:underline">
              Elescarramanmusic™
            </a>
            . Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-2 md:gap-6">
            <a
              href="#"
              className="text-sm text-default-500 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm text-default-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-default-500 hover:text-primary transition-colors"
            >
              Licensing
            </a>
            <a
              href="#"
              className="text-sm text-default-500 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

FooterComponent.displayName = "FooterComponent";

export default FooterComponent;
