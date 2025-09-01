// Navbar.jsx (dark-only)
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const LinkItem = ({ href, children }) => (
    <a href={href} className="hover:text-sky-300 transition-colors">
      {children}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0F172A]/60 text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-bold text-xl">
          DUSA Solutions
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <LinkItem href="#servicios">Servicios</LinkItem>
          </li>
          <li>
            <LinkItem href="#testimonios">Testimonios</LinkItem>
          </li>
          <li>
            <LinkItem href="#portafolio">Portafolio</LinkItem>
          </li>
          <li>
            <LinkItem href="#contacto">Contacto</LinkItem>
          </li>
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5213114857991"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-sm shadow"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>

        {/* Menú móvil */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Drawer móvil */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-3 py-3">
            <li>
              <LinkItem href="#servicios">Servicios</LinkItem>
            </li>
            <li>
              <LinkItem href="#testimonios">Testimonios</LinkItem>
            </li>
            <li>
              <LinkItem href="#portafolio">Portafolio</LinkItem>
            </li>
            <li>
              <LinkItem href="#contacto">Contacto</LinkItem>
            </li>
          </ul>
          <a
            href="https://wa.me/5213114857991"
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
