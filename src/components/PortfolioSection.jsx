// src/components/PortfolioSection.jsx
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO } from "../data/portfolio";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const TYPES = ["Todos", "Web", "Mobile"];

export default function PortfolioSection() {
  const [type, setType] = useState("Todos");
  const [q, setQ] = useState("");
  const [active, setActive] = useState(null); // id del caso abierto

  // Filtro + búsqueda
  const list = useMemo(() => {
    return PORTFOLIO.filter((p) => {
      const byType = type === "Todos" || p.type.includes(type);
      const text = `${p.title} ${p.industry}`.toLowerCase();
      return byType && (!q || text.includes(q.toLowerCase()));
    });
  }, [type, q]);

  return (
    <section id="portafolio" className="py-12 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header + filtros */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-2xl font-semibold">Portafolio</h2>
          <div className="flex gap-2 flex-wrap">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-3 py-1.5 rounded-full text-sm border transition
                ${
                  type === t
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 hover:bg-white/10 border-white/10"
                }`}
                aria-pressed={type === t}
              >
                {t}
              </button>
            ))}
            <input
              className="ml-2 bg-[#0F172A] border border-white/10 rounded-lg px-3 py-1.5 text-sm"
              placeholder="Buscar…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Buscar proyectos"
            />
          </div>
        </div>

        {/* Grid de cards (uniformes 16:9) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#1f2937] hover:border-white/20 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              {/* Imagen con aspecto uniforme */}
              <figure className="relative rounded-b-none">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: p.focus || "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute left-3 bottom-3 flex gap-2">
                    {p.metrics?.slice(0, 2).map((m) => (
                      <span
                        key={m.label}
                        className="text-[11px] px-2 py-1 rounded-full bg-black/60 border border-white/10"
                      >
                        <b>{m.value}</b> {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </figure>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="text-sm opacity-80">
                      {p.industry} • {p.year}
                    </p>
                  </div>
                  <div className="hidden md:flex gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Acciones */}
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => setActive(p.id)}
                    className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
                  >
                    Ver caso
                  </button>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-sm"
                      aria-label={`Abrir ${p.title} en una pestaña nueva`}
                    >
                      Ir al sitio
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-8">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 shadow"
          >
            ¿Quieres un resultado similar? Hablemos
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <PortfolioModal
            project={PORTFOLIO.find((x) => x.id === active)}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function PortfolioModal({ project, onClose }) {
  if (!project) return null;

  // índice del carrusel
  const [idx, setIdx] = useState(0);
  const gallery = project.gallery?.length ? project.gallery : [project.cover];

  // Bloquear scroll del body y atajos de teclado
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gallery.length]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative w-[min(96vw,1100px)] bg-[#0b1220]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.98, y: 10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.98, y: 10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-4 border-b border-white/10">
          <div className="min-w-0">
            <h4 className="font-semibold truncate">{project.title}</h4>
            <div className="mt-1 flex flex-wrap gap-2">
              <Badge>{project.industry}</Badge>
              <Badge>{project.year}</Badge>
              {project.type?.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/8 hover:bg-white/12 border border-white/10"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar</span>
          </button>
        </div>

        {/* Cuerpo: layout 2 columnas en desktop */}
        <div className="grid md:grid-cols-[380px,1fr]">
          {/* Columna izquierda: texto (scroll si crece) */}
          <div className="p-5 md:p-6 overflow-y-auto max-h-[70vh] md:max-h-[72vh]">
            <KV label="Objetivo" value={project.goal} />
            <KV label="Solución" value={project.solution} />
            <KV label="Resultados" value={project.results} />

            {project.metrics?.length > 0 && (
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wide opacity-70 mb-2">
                  Métricas
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      <b>{m.value}</b> {m.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5">
              <div className="text-xs uppercase tracking-wide opacity-70 mb-2">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack?.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-1 rounded bg-white/5 border border-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {project.liveUrl && (
              <div className="mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visitar sitio
                </a>
              </div>
            )}
          </div>

          {/* Columna derecha: carrusel */}
          <div className="relative border-t md:border-t-0 md:border-l border-white/10 bg-[#0c1526]">
            {/* Contenedor principal de imagen */}
            <div className="relative h-[46vh] md:h-[72vh]">
              {/* Botones prev/next */}
              {gallery.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10"
                    onClick={() =>
                      setIdx((i) => (i - 1 + gallery.length) % gallery.length)
                    }
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10"
                    onClick={() => setIdx((i) => (i + 1) % gallery.length)}
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Contador */}
              {gallery.length > 1 && (
                <div className="absolute left-3 top-3 text-xs px-2 py-1 rounded bg-black/50 border border-white/10">
                  {idx + 1}/{gallery.length}
                </div>
              )}

              {/* Imagen principal (object-contain para respetar verticales) */}
              <div className="absolute inset-0 grid place-items-center p-3">
                <img
                  key={gallery[idx]}
                  src={gallery[idx]}
                  alt={`${project.title} — captura ${idx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-md border border-white/10 bg-[#0e1a2f]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Thumbs */}
            {gallery.length > 1 && (
              <div className="px-3 pb-3 md:px-4 md:pb-4">
                <div className="mt-2 flex gap-2 overflow-x-auto">
                  {gallery.map((src, i) => (
                    <button
                      key={src + i}
                      onClick={() => setIdx(i)}
                      className={`shrink-0 rounded-md border ${
                        i === idx
                          ? "border-blue-400"
                          : "border-white/10 hover:border-white/20"
                      }`}
                      aria-label={`Ver captura ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`Miniatura ${i + 1}`}
                        className="h-14 w-20 object-cover rounded-md"
                        style={{ objectPosition: "center" }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* --------- Helpers UI --------- */

function Badge({ children }) {
  return (
    <span className="text-[11px] px-2 py-1 rounded bg-white/6 border border-white/10">
      {children}
    </span>
  );
}

function KV({ label, value }) {
  if (!value) return null;
  return (
    <div className="mt-1">
      <div className="text-xs uppercase tracking-wide opacity-70 mb-1">
        {label}
      </div>
      <p className="text-sm leading-relaxed opacity-90">{value}</p>
    </div>
  );
}
