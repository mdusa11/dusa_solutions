// App.jsx (dark-only)
import { useEffect, useMemo, useState, useLayoutEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import { Rocket, Shield, Clock4 } from "lucide-react";
import { Code2, Smartphone, Server, Database, Cloud } from "lucide-react";
import PortfolioSection from "./components/PortfolioSection.jsx";

function App() {
  // +++ debajo de tus otros useMemo/useState +++
  const CORE = useMemo(
    () => [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Flutter",
      "Node.js",
      "Express",
      "NestJS",
      "Laravel",
    ],
    []
  );

  const INTEGRACIONES = useMemo(
    () => [
      // pagos / auth / forms
      "Stripe",
      "PayPal",
      "Clerk",
      "Auth0",
      "Zod",
      "React Hook Form",
      // datos / realtime
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma",
      "Redis",
      // search / media / mapas
      "Elasticsearch",
      "Meilisearch",
      "Cloudinary",
      "Mapbox",
      "Google Maps",
      // CMS / contenido
      "Contentful",
      "Sanity",
      "WordPress (Headless)",
      // email / sms
      "Resend",
      "SendGrid",
      "Twilio",
      // data fetching
      "Axios",
      "SWR",
      // analítica / producto
      "GA4",
      "Plausible",
      "PostHog",
      "Sentry",
      // IA
      "OpenAI",
    ],
    []
  );

  const HERRAMIENTAS = useMemo(
    () => [
      "Vercel",
      "Render",
      "Cloud Run",
      "Cloudflare",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Playwright",
      "Vitest",
      "ESLint",
      "Prettier",
    ],
    []
  );

  const [showAllTech, setShowAllTech] = useState(false);

  // 🔒 Dark-only: forzamos la clase 'dark' antes del primer paint
  useLayoutEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  const darkMode = true;
  const setDarkMode = () => {}; // no-op para Navbar

  const [openFAQ, setOpenFAQ] = useState(null);
  const [formStatus, setFormStatus] = useState({ state: "idle", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // --- Datos centralizados ---
  const SERVICES = useMemo(
    () => [
      {
        title: "Desarrollo Web",
        desc: "Landing pages, sitios corporativos y sistemas a medida con tecnologías modernas.",
      },
      {
        title: "Aplicaciones Móviles",
        desc: "Apps multiplataforma en Flutter con gran rendimiento y diseño pensado en conversión.",
      },
      {
        title: "Identidad Visual",
        desc: "Logotipos, manual de marca y piezas visuales que hacen tu proyecto memorable.",
      },
    ],
    []
  );
  const TOOLTIPS = {
    React: "Framework UI para SPAs y apps interactivas.",
    "Next.js": "SSR/SSG, rutas app y edge functions.",
    "Tailwind CSS": "Estilos utilitarios, rápido y consistente.",
    "Framer Motion": "Animaciones fluidas para React.",
    "Node.js": "Backend JS de alto rendimiento.",
    Stripe: "Pagos online, suscripciones y checkout.",
    Supabase: "Auth + Postgres + Realtime como BaaS.",
    Firebase: "Auth, Realtime/Firestore, hosting y más.",
    PostgreSQL: "Base de datos relacional robusta.",
    MongoDB: "Base NoSQL flexible para documentos.",
    Prisma: "ORM type-safe para bases de datos.",
    Vercel: "Deploys rápidos, edge y previews.",
    Docker: "Contenedores portables para dev/infra.",
    Sentry: "Monitoreo de errores y performance.",
    PostHog: "Producto/analítica, eventos y funnels.",
    OpenAI: "IA para chat, embeddings y generación.",
  };

  const PORTFOLIO = useMemo(
    () => [
      {
        title: "SenseiMeds Descargas",
        desc: "Página para descargas de manuales médicos.",
        img: "https://via.placeholder.com/1200x600",
        w: 1200,
        h: 600,
      },
      {
        title: "SenseiMeds Principal",
        desc: "Landing principal de la marca SenseiMeds.",
        img: "https://via.placeholder.com/1200x600",
        w: 1200,
        h: 600,
      },
      {
        title: "App de Transporte",
        desc: "Aplicación Flutter con geolocalización y tracking en tiempo real.",
        img: "https://via.placeholder.com/1200x600",
        w: 1200,
        h: 600,
      },
      {
        title: "Biblioteca de Recursos ENARM",
        desc: "Catálogo de recursos médicos con UX limpia y ágil.",
        img: "https://via.placeholder.com/1200x600",
        w: 1200,
        h: 600,
      },
    ],
    []
  );

  const TESTIMONIALS = useMemo(
    () => [
      {
        nombre: "Ana Martínez",
        texto:
          "Lanzamos nuestra plataforma sin fallos. ¡Excelente equipo y soporte constante!",
      },
      {
        nombre: "Carlos Ramírez",
        texto:
          "La app móvil quedó súper completa. Recomendados si buscas calidad y rapidez.",
      },
      {
        nombre: "Laura Gómez",
        texto:
          "Desde el primer contacto entendieron nuestras necesidades. El diseño quedó increíble.",
      },
    ],
    []
  );

  const FAQS = useMemo(
    () => [
      {
        pregunta: "¿Cuánto tiempo tarda un proyecto?",
        respuesta:
          "Depende del alcance: una landing básica suele estar en 7–10 días.",
      },
      {
        pregunta: "¿Entregan factura?",
        respuesta: "Sí, emitimos factura con tus datos fiscales.",
      },
      {
        pregunta: "¿Puedo pedir cambios después del diseño?",
        respuesta: "Incluimos una ronda de ajustes para que quedes satisfecho.",
      },
    ],
    []
  );

  // --- Animaciones seguras (reduced motion) ---
  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
      };

  const fadeDown = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  // --- Helpers ---
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // --- Formulario (validación + honeypot) ---
  const onSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setFormStatus({ state: "idle", msg: "" });

    const form = new FormData(e.currentTarget);
    if (form.get("website")) return; // honeypot

    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setFormStatus({
        state: "error",
        msg: "Por favor, completa todos los campos.",
      });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setFormStatus({
        state: "error",
        msg: "Ingresa un correo electrónico válido.",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setFormStatus({
        state: "success",
        msg: "¡Gracias! Te respondemos en breve.",
      });
      setIsSubmitting(false);
      e.currentTarget.reset();
    }, 700);
  };

  return (
    <>
      {/* Skip link */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
      >
        Saltar al contenido
      </a>

      {/* 🔒 Fondo global oscuro */}
      <div className="bg-[#111827] text-white min-h-screen relative">
        {/* Header / Navbar */}
        <header>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        <main id="contenido">
          {/* HERO (oscuro) */}
          <section
            aria-labelledby="hero-title"
            className="relative h-[88vh] text-white flex flex-col justify-center items-center text-center px-4 overflow-hidden"
          >
            {/* Fondo gradiente + grid sutil */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(transparent 23px, rgba(255,255,255,0.06) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.06) 24px)",
                backgroundSize: "24px 24px, 24px 24px",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              }}
            />

            <motion.div {...fadeDown} className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs md:text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                <span className="size-2 rounded-full bg-green-400 inline-block" />
                Agencia en Guadalajara, MX • Respuesta en &lt; 24h
              </span>
            </motion.div>

            <motion.h1
              {...fadeDown}
              id="hero-title"
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              DUSA Solutions
            </motion.h1>

            <motion.p
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.25, duration: 0.6 },
                  })}
              className="text-lg md:text-xl max-w-2xl mt-3 opacity-95"
            >
              Impulsamos tu presencia digital con tecnología moderna y diseño de
              impacto 🚀
            </motion.p>

            {/* Glows */}
            <div
              aria-hidden
              className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-blue-500/20 blur-3xl rounded-full z-0"
            />
            <div
              aria-hidden
              className="absolute bottom-[-160px] right-[-120px] w-[540px] h-[540px] bg-sky-400/10 blur-3xl rounded-full z-0"
            />
          </section>

          {/* QUIÉNES SOMOS (igual, pero SIN proceso/stack dentro) */}
          <section
            aria-labelledby="about-title"
            id="sobre-nosotros"
            className="bg-[#1f2937] py-14 px-6 scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h2 id="about-title" className="text-2xl font-semibold">
                ¿Quiénes somos?
              </h2>
              <p className="max-w-3xl mx-auto opacity-90 mt-3">
                Somos una <b>agencia de desarrollo web y móvil</b> que diseña y
                construye productos con enfoque en
                <b> conversión</b>, <b>rendimiento</b> y <b>escalabilidad</b>.
                Combinamos <b>UX/UI</b>, código moderno y analítica desde el día
                uno para que cada entrega mueva una métrica real de tu negocio.
              </p>
              <p className="max-w-3xl mx-auto opacity-90 mt-4">
                Trabajamos de punta a punta: <b>estrategia</b>, diseño{" "}
                <b>UX/UI</b>, <b>frontend</b>,<b> mobile</b> , <b>backend</b> e{" "}
                <b>integraciones</b> (pagos, auth, CMS). Incluimos pruebas,
                despliegue, documentación, tableros de métricas y{" "}
                <b>soporte post-lanzamiento</b> para que puedas medir, optimizar
                y crecer sin fricción.
              </p>

              {/* Métricas rápidas */}
              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10">
                  <p className="text-4xl font-extrabold">+10</p>
                  <p className="opacity-80">proyectos lanzados</p>
                </div>
                <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10">
                  <p className="text-4xl font-extrabold">+5</p>
                  <p className="opacity-80">sectores atendidos</p>
                </div>
                <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10">
                  <p className="text-4xl font-extrabold">24h</p>
                  <p className="opacity-80">tiempo medio de respuesta</p>
                </div>
              </div>

              {/* Diferenciales */}
              <div className="grid gap-6 md:grid-cols-3 mt-10">
                <motion.article
                  className="bg-[#374151] p-6 rounded-2xl shadow border border-white/10 text-left"
                  {...fadeUp}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Rocket className="w-5 h-5 text-sky-400" />
                    <h3 className="font-semibold">Enfoque a resultados</h3>
                  </div>
                  <p className="opacity-90">
                    Métricas claras (CTR, leads, retención). Entregamos con
                    hipótesis y tracking desde el día 1.
                  </p>
                </motion.article>

                <motion.article
                  className="bg-[#374151] p-6 rounded-2xl shadow border border-white/10 text-left"
                  {...fadeUp}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-semibold">Tecnologías modernas</h3>
                  </div>
                  <p className="opacity-90">
                    React, Flutter, Node, Tailwind, Supabase/Firebase, Vercel.
                    Bases sólidas para escalar sin dolores.
                  </p>
                </motion.article>

                <motion.article
                  className="bg-[#374151] p-6 rounded-2xl shadow border border-white/10 text-left"
                  {...fadeUp}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-indigo-400" />
                    <h3 className="font-semibold">Soporte y garantía</h3>
                  </div>
                  <p className="opacity-90">
                    Mantenimiento post-lanzamiento, monitoreo básico y una ronda
                    de ajustes incluida.
                  </p>
                </motion.article>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 shadow"
                >
                  Hablemos de tu proyecto
                </a>
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section
            aria-labelledby="services-title"
            id="servicios"
            className="bg-[#1f2937] py-12 px-6 scroll-mt-24"
          >
            <h2
              id="services-title"
              className="text-2xl font-semibold mb-8 text-center"
            >
              Nuestros servicios
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              {SERVICES.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="group bg-[#374151] p-6 rounded-2xl shadow border border-white/10 hover:border-white/20 transition relative overflow-hidden"
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition [mask-image:radial-gradient(200px_200px_at_var(--x,_50%)_var(--y,_50%),white,transparent)]"
                    onMouseMove={(e) => {
                      const el = e.currentTarget;
                      const rect = el.getBoundingClientRect();
                      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
                      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
                    }}
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(59,130,246,0.25), rgba(20,184,166,0.25))",
                    }}
                  />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-90">{item.desc}</p>
                  <div className="mt-4 h-1 w-0 group-hover:w-full transition-all bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                </motion.article>
              ))}
            </div>
          </section>

          {/* TESTIMONIOS (ahora antes del Portafolio) */}
          <section
            aria-labelledby="testimonials-title"
            id="testimonios"
            className="bg-[#1f2937] py-12 px-6 scroll-mt-24"
          >
            <h2
              id="testimonials-title"
              className="text-2xl font-semibold mb-8 text-center"
            >
              Lo que dicen nuestros clientes
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="hidden md:grid gap-8 md:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                  <article
                    key={t.nombre}
                    className="bg-[#374151] p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
                  >
                    <p className="italic mb-4">“{t.texto}”</p>
                    <p className="font-semibold">— {t.nombre}</p>
                  </article>
                ))}
              </div>

              {/* Carrusel en mobile */}
              <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
                {TESTIMONIALS.map((t) => (
                  <article
                    key={t.nombre}
                    className="snap-center min-w-[85%] bg-[#374151] p-6 rounded-2xl shadow text-left"
                  >
                    <p className="italic mb-4">“{t.texto}”</p>
                    <p className="font-semibold">— {t.nombre}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <PortfolioSection />

          {/* ====== MOVIDOS AQUÍ ====== */}

          {/* Proceso (stepper responsive) — antes estaba dentro de “¿Quiénes somos?” */}
          <section className="py-12 px-6 bg-[#1f2937]">
            <h3 className="text-center font-semibold mb-6">Nuestro proceso</h3>

            {/* Desktop: stepper horizontal */}
            <div className="relative hidden md:block max-w-6xl mx-auto">
              {/* Línea conectora */}
              <div className="absolute left-0 right-0 top-5 h-0.5 bg-white/10" />
              <ol
                className="grid grid-cols-4 gap-6"
                aria-label="Línea de tiempo del proceso"
              >
                {[
                  {
                    t: "Brief & estrategia",
                    d: "Objetivos, público, KPIs y roadmap.",
                  },
                  {
                    t: "UX/UI",
                    d: "Wireframes y diseño con feedback ágil.",
                  },
                  {
                    t: "Desarrollo",
                    d: "Frontend/Backend, QA y performance.",
                  },
                  { t: "Lanzamiento", d: "Tracking, ajustes y soporte." },
                ].map((s, i) => (
                  <li
                    key={s.t}
                    className="relative bg-[#0F172A] p-5 rounded-2xl border border-white/10"
                  >
                    {/* N° del paso “pinchado” en la línea */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/30 bg-[#0F172A] font-semibold">
                      {i + 1}
                    </div>

                    <div className="font-semibold mb-1 text-center">{s.t}</div>
                    <p className="text-sm opacity-80 text-center">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile: carrusel con snap */}
            <div className="md:hidden -mx-6">
              <ol
                className="flex gap-4 px-6 pb-3 overflow-x-auto snap-x snap-mandatory touch-pan-x overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Proceso (desliza para ver pasos)"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {[
                  {
                    t: "Brief & estrategia",
                    d: "Objetivos, público, KPIs y roadmap.",
                  },
                  {
                    t: "UX/UI",
                    d: "Wireframes y diseño con feedback ágil.",
                  },
                  {
                    t: "Desarrollo",
                    d: "Frontend/Backend, QA y performance.",
                  },
                  { t: "Lanzamiento", d: "Tracking, ajustes y soporte." },
                ].map((s, i) => (
                  <li
                    key={s.t}
                    className="snap-start shrink-0 basis-[85%] bg-[#0F172A] p-5 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-sm">
                        {i + 1}
                      </span>
                      <span className="font-semibold">{s.t}</span>
                    </div>
                    <p className="text-sm opacity-80">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Stack (badges) — antes estaba dentro de “¿Quiénes somos?” */}
          {/* STACK — NUEVO LAYOUT LIMPIO */}
          <section className="px-6 py-12" id="stack">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-center font-semibold mb-2">
                Tecnologías & integraciones
              </h3>
              <p className="text-center text-sm opacity-80 mb-6">
                Nuestro stack principal y herramientas compatibles. Elegimos lo
                que mejor conviene a cada proyecto.
              </p>

              <div className="space-y-6">
                {/* Core stack */}
                <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <b>Core stack</b>
                  </div>

                  {/* Grid auto-fit: reparte las pills de forma uniforme */}
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                    {CORE.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs leading-5 hover:bg-white/10 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Integraciones (con colapso + fade) */}
                <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 backdrop-blur-sm p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <b>Integraciones frecuentes</b>
                    </div>
                    <button
                      onClick={() => setShowAllTech((v) => !v)}
                      className="text-xs px-2 py-1 rounded border border-white/10 hover:bg-white/5"
                    >
                      Ver {showAllTech ? "menos" : "más"}
                    </button>
                  </div>

                  {/* Colapso suave por altura */}
                  <div
                    className={`grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 overflow-hidden transition-[max-height] duration-300 ${
                      showAllTech ? "max-h-[2000px]" : "max-h-36"
                    }`}
                  >
                    {(showAllTech
                      ? INTEGRACIONES
                      : INTEGRACIONES.slice(0, 18)
                    ).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs leading-5 hover:bg-white/10 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Fade al final cuando está colapsado */}
                  {!showAllTech && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-6 bottom-6 h-16 bg-gradient-to-t from-[#0F172A]/60 to-transparent"
                    />
                  )}
                </div>

                {/* Herramientas & QA */}
                <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    <b>Herramientas & QA</b>
                  </div>

                  <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
                    {HERRAMIENTAS.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs leading-5 hover:bg-white/10 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs opacity-60 mt-3 text-center">
                No todas las tecnologías se aplican en todos los proyectos;
                seleccionamos según objetivos, presupuesto y tiempos.
              </p>
            </div>
          </section>

          {/* ====== /MOVIDOS AQUÍ ====== */}

          {/* CONTACTO */}
          <section
            aria-labelledby="contact-title"
            id="contacto"
            className="bg-[#1f2937] py-12 px-6 scroll-mt-24"
          >
            <h2
              id="contact-title"
              className="text-2xl font-semibold mb-8 text-center"
            >
              Contáctanos
            </h2>
            <div className="max-w-2xl mx-auto grid gap-6">
              <form
                onSubmit={onSubmit}
                className="bg-[#374151] p-6 rounded-2xl shadow space-y-4 text-left"
                noValidate
              >
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full p-2 rounded border bg-[#1f2230]"
                    placeholder="Tu nombre"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full p-2 rounded border bg-[#1f2230]"
                    placeholder="tucorreo@ejemplo.com"
                    required
                    aria-required="true"
                    aria-invalid={
                      formStatus.state === "error" ? "true" : "false"
                    }
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 rounded border bg-[#1f2230]"
                    placeholder="Cuéntanos sobre tu proyecto"
                    required
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus-visible:ring focus-visible:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {isSubmitting && (
                    <span className="inline-block size-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>

                <div aria-live="polite" className="min-h-[1.5rem] text-sm">
                  {formStatus.state === "success" && (
                    <span className="text-green-400">{formStatus.msg}</span>
                  )}
                  {formStatus.state === "error" && (
                    <span className="text-red-400">{formStatus.msg}</span>
                  )}
                </div>
              </form>

              <a
                href={`https://wa.me/5213114857991?text=${encodeURIComponent(
                  "Hola DUSA, vengo del sitio web y quiero más info 😄"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white py-3 px-6 rounded-xl shadow hover:bg-green-600 text-center focus-visible:ring focus-visible:ring-green-400"
                aria-label="Preferir WhatsApp para contactarnos"
              >
                ¿Prefieres WhatsApp? Escríbenos directo 📲
              </a>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#0F172A] text-white text-center p-6">
          <p className="mb-3">
            © 2025 DUSA Solutions. Todos los derechos reservados.
          </p>
          <nav
            aria-label="Redes sociales"
            className="flex justify-center gap-6"
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/dusasolutions"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 focus-visible:ring focus-visible:ring-white/40 rounded"
              aria-label="Instagram de DUSA Solutions"
              title="Instagram"
            >
              <svg
                className="w-6 h-6 fill-white"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.575-.07 4.84c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.575.07-4.84c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0 1.838a7.995 7.995 0 0 0-8 8 7.995 7.995 0 0 0 8 8 7.995 7.995 0 0 0 8-8 7.995 7.995 0 0 0-8-8zm6.406-1.44a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/61575176534540"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 focus-visible:ring focus-visible:ring-white/40 rounded"
              aria-label="Facebook de DUSA Solutions"
              title="Facebook"
            >
              <svg
                className="w-6 h-6 fill-white"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Facebook</title>
                <path d="M22.676 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.594 1.323-1.326V1.326C24 .593 23.407 0 22.676 0" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com/@mxnuelsz"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 focus-visible:ring focus-visible:ring-white/40 rounded"
              aria-label="TikTok de DUSA Solutions"
              title="TikTok"
            >
              <svg
                className="w-6 h-6 fill-white"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>TikTok</title>
                <path d="M12.775 0h3.875c.19 2.092 1.562 3.34 3.85 3.5v3.875c-1.513.036-2.954-.464-4.1-1.4l-.025 9.4c0 4.375-3.2 8.3-8.8 8.3C3.9 23.675.05 18.8.05 13.1c0-5.125 3.775-9.375 9.4-9.375.525 0 1.075.075 1.625.15v4.1c-.55-.1-1.075-.175-1.625-.175-2.975 0-5.025 2.275-5.025 5.35 0 2.95 1.925 5.325 4.975 5.325 3.15 0 4.85-2.2 4.85-5.175V0z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/5213114857991"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 focus-visible:ring focus-visible:ring-white/40 rounded"
              aria-label="WhatsApp de DUSA Solutions"
              title="WhatsApp"
            >
              <svg
                className="w-6 h-6 fill-white"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>WhatsApp</title>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.302 5.495 0 12.057 0c3.181 0 6.167 1.24 8.413 3.487a11.821 11.821 0 0 1 3.484 8.414c-.003 6.563-5.407 11.897-12.07 11.897a12.18 12.18 0 0 1-5.688-1.445L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.429 9.889-9.864.002-5.462-4.415-9.89-9.881-9.893-5.452 0-9.88 4.438-9.882 9.887a9.842 9.842 0 0 0 1.598 5.26l-.999 3.648 3.883-.93zm11.387-5.464c-.074-.123-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.148-.668.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.172.2-.296.298-.495.099-.198.05-.372-.025-.521-.075-.148-.668-1.611-.916-2.206-.242-.579-.487-.5-.668-.51-.173-.008-.372-.01-.571-.01a1.1 1.1 0 0 0-.796.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.072.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
            </a>
          </nav>
        </footer>

        {/* BOTÓN FLOTANTE WHATSAPP */}
        <a
          href={`https://wa.me/5213114857991?text=${encodeURIComponent(
            "Hola DUSA 👋, quiero una cotización."
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir chat de WhatsApp"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 focus-visible:ring focus-visible:ring-green-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0a11.87 11.87 0 0 0-8.48 3.48A11.87 11.87 0 0 0 0 12.04c0 2.13.56 4.19 1.62 6.01L0 24l5.97-1.56A11.94 11.94 0 0 0 12.04 24c6.63 0 12-5.37 12-11.96 0-3.21-1.25-6.23-3.52-8.56zm-8.48 19.46c-2.12 0-4.17-.55-5.96-1.61l-.43-.25-3.54.92.95-3.45-.28-.45a10.12 10.12 0 0 1 1.63-12.23A10.12 10.12 0 0 1 12.04 2c5.6 0 10.15 4.55 10.15 10.15 0 5.6-4.55 10.15-10.15 10.15zm5.34-7.64c-.29-.15-1.71-.84-1.97-.93-.27-.1-.46-.15-.64.15-.19.29-.73.93-.89 1.12-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17 0-.36 0-.55 0s-.5.07-.77.36c-.26.29-1.01.99-1.01 2.4s1.03 2.77 1.18 2.96c.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.37-.07-.11-.26-.17-.55-.32z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
