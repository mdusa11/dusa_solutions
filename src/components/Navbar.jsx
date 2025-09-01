// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../img/logo.svg"; // tu logo en src/img/

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Actualiza el link activo al cambiar hash o al hacer scroll por secciones
  useEffect(() => {
    const onHash = () => setActive(location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-52% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const goTo = (href) => (e) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0F172A]/60 text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="DUSA Solutions" className="h-7 w-7" />
          <span className="font-bold text-lg md:text-xl">DUSA Solutions</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={goTo(l.href)}
                aria-current={active === l.href ? "page" : undefined}
                className={`transition-colors hover:text-sky-300 ${
                  active === l.href ? "text-sky-300" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={`https://wa.me/5213114857991?text=${encodeURIComponent(
            "Hola DUSA 👋, vengo del sitio y quiero más info."
          )}`}
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

      {/* Drawer móvil (con transición) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t border-white/10 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-4 py-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={goTo(l.href)}
                className="block py-1 hover:text-sky-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4">
          <a
            href={`https://wa.me/5213114857991?text=${encodeURIComponent(
              "Hola DUSA 👋, quiero una cotización."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
