import {
  ArrowUpRight,
  Check,
  Globe2,
  MessageCircle,
  QrCode,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Presencia digital",
    description:
      "Para que cuando alguien busque tu negocio encuentre información clara, actualizada y útil.",
  },
  {
    number: "02",
    icon: Store,
    title: "Web para tu negocio",
    description:
      "Una web sencilla, rápida y pensada para que tus clientes sepan quién eres y cómo encontrarte.",
  },
  {
    number: "03",
    icon: QrCode,
    title: "Soluciones con QR",
    description:
      "QR para facilitar reservas, contacto, información o procesos concretos de tu negocio.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Soluciones a medida",
    description:
      "Si tienes un problema que podría resolverse con tecnología, lo estudiamos y buscamos una solución.",
  },
];

const businesses = [
  "Peluquerías",
  "Barberías",
  "Restaurantes",
  "Bares",
  "Estética",
  "Comercios",
  "Pastelerías",
  "Otros negocios locales",
];

const projects = [
  {
    number: "01",
    tag: "HOSTELERÍA · MVP",
    title: "Sistema de avisos con QR",
    description:
      "Un sistema pensado para que los clientes de un bar o restaurante puedan avisar al camarero desde su mesa mediante un código QR.",
    details: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    icon: QrCode,
  },
  {
    number: "02",
    tag: "DESARROLLO WEB",
    title: "Aplicaciones web",
    description:
      "He desarrollado aplicaciones y MVPs utilizando tecnologías modernas para resolver necesidades concretas.",
    details: ["React", "Next.js", "TypeScript", "Node.js"],
    icon: Globe2,
  },
  {
    number: "03",
    tag: "SOFTWARE",
    title: "Herramientas y sistemas",
    description:
      "También he trabajado en herramientas internas, sistemas de gestión y proyectos propios para aprender construyendo.",
    details: ["Java", "Spring Boot", "SQL", "APIs REST"],
    icon: Wrench,
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* NAVBAR */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a
            href="#inicio"
            className="text-xl font-black tracking-[-0.06em]"
          >
            ADRI<span className="text-[#ff5c35]">.</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
            <a
              href="#servicios"
              className="transition-opacity hover:opacity-50"
            >
              Servicios
            </a>

            <a
              href="#proyectos"
              className="transition-opacity hover:opacity-50"
            >
              Proyectos
            </a>

            <a
              href="#sobre-mi"
              className="transition-opacity hover:opacity-50"
            >
              Sobre mí
            </a>

            <a
              href="#contacto"
              className="rounded-full bg-[#171717] px-5 py-3 text-white transition hover:bg-[#ff5c35]"
            >
              Hablemos
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white md:hidden"
          >
            Hablemos
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen bg-[#f5f3ee]"
      >
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-28">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className="h-2 w-2 rounded-full bg-[#ff5c35]" />
              Sabadell · Vallès
            </div>

            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.8rem)] font-black leading-[0.86] tracking-[-0.075em]">
              DIGITAL
              <br />
              PARA
              <br />
              <span className="text-[#ff5c35]">NEGOCIOS.</span>
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-8 text-black/60 md:text-xl">
              Soy Adri, desarrollador. Ayudo a pequeños negocios a mejorar su
              presencia digital y a solucionar pequeñas cosas que pueden hacer
              su día a día más fácil.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#171717] px-7 py-4 font-semibold text-white transition hover:bg-[#ff5c35]"
              >
                Hablemos de tu negocio
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/50 px-7 py-4 font-semibold transition hover:bg-white"
              >
                Ver servicios
              </a>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-black/30">
              Desarrollo · Digitalización · Soluciones a medida
            </p>
          </div>

          {/* FOTO */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -right-5 -top-5 z-20 hidden rotate-6 rounded-2xl bg-[#ff5c35] px-5 py-4 text-sm font-bold text-white shadow-xl sm:block">
              Trato directo.
              <br />
              Sin intermediarios.
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#dedbd2]">
              <img
                src="/images/adri.jpg"
                alt="Adri"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7 pt-24">
                <p className="text-2xl font-bold tracking-tight text-white">
                  Adri
                </p>

                <p className="mt-1 text-sm text-white/75">
                  Desarrollo y soluciones digitales
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 hidden w-40 rounded-3xl bg-white p-5 shadow-xl sm:block">
              <Sparkles className="text-[#ff5c35]" size={23} />

              <p className="mt-4 text-sm font-bold leading-5">
                Tecnología sin complicaciones.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-xs font-medium uppercase tracking-[0.2em] text-black/30 lg:block">
          Scroll para conocerme
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#171717] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                La idea
              </span>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.05em] md:text-6xl">
                No necesitas una gran agencia para poner tu negocio al día en
                Internet.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
                Muchas veces hay pequeñas cosas que podrían estar mejor:
                información desactualizada, una web que no existe, un contacto
                difícil de encontrar o procesos que podrían simplificarse.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
                Yo me ocupo de la parte técnica y te explico lo importante de
                forma sencilla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="bg-[#f5f3ee] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Qué puedo hacer
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-6xl">
                Soluciones pequeñas.
                <br />
                <span className="text-black/30">Problemas reales.</span>
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-black/50">
              No vendo tecnología por venderla. Primero entendemos el problema
              y después vemos qué merece la pena hacer.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group bg-[#f5f3ee] p-8 transition-colors hover:bg-white md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold text-[#ff5c35]">
                      {service.number}
                    </span>

                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      className="transition-transform group-hover:-rotate-6"
                    />
                  </div>

                  <h3 className="mt-14 text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-base leading-7 text-black/50">
                    {service.description}
                  </p>

                  <div className="mt-8 h-px w-12 bg-[#ff5c35] transition-all group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACK */}
      <section className="bg-[#ff5c35] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Servicio principal
              </span>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
                PACK DE
                <br />
                PRESENCIA
                <br />
                DIGITAL.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
                Una puesta a punto de la presencia digital de tu negocio para
                que tus clientes puedan encontrarte, entender qué haces y
                contactar contigo fácilmente.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#171717] p-7 text-white md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">
                Puede incluir
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Revisión de Google y datos del negocio",
                  "Página web sencilla",
                  "WhatsApp y canales de contacto",
                  "Enlaces importantes",
                  "Códigos QR",
                  "Pequeñas mejoras digitales",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-white/80"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[#ff5c35]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-8 flex items-center justify-between rounded-xl bg-white px-5 py-4 font-semibold text-[#171717] transition hover:bg-[#f5f3ee]"
              >
                Quiero hablarlo
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Para quién
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] md:text-6xl">
                Hecho para negocios locales.
              </h2>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-black/10">
              {businesses.map((business, index) => (
                <div
                  key={business}
                  className={`border-b border-r border-black/10 p-5 md:p-7 ${
                    index % 2 === 0 ? "bg-[#f5f3ee]" : "bg-white"
                  }`}
                >
                  <span className="text-xs font-bold text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-6 text-base font-semibold md:text-lg">
                    {business}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="bg-[#171717] py-24 text-white md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Algunos proyectos
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-6xl">
                Me gusta aprender
                <br />
                <span className="text-white/30">construyendo.</span>
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-white/40">
              Estos son algunos de los proyectos y experimentos que he
              desarrollado. No son clientes ficticios: son proyectos propios
              creados para aprender y probar ideas.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="group flex min-h-[440px] flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06] md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold text-[#ff5c35]">
                      {project.number}
                    </span>

                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-white/30 transition-colors group-hover:text-[#ff5c35]"
                    />
                  </div>

                  <div className="mt-12">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-white/30">
                      {project.tag}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/45">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-10">
                    <div className="flex flex-wrap gap-2">
                      {project.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/45"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-[#f5f3ee] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
            Cómo trabajo
          </span>

          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-6xl">
            Fácil de entender.
            <br />
            Fácil de empezar.
          </h2>

          <div className="mt-16 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-4">
            {[
              [
                "01",
                "Hablamos",
                "Me cuentas cómo funciona tu negocio y qué necesitas.",
              ],
              [
                "02",
                "Detectamos",
                "Vemos qué merece realmente la pena mejorar.",
              ],
              [
                "03",
                "Te propongo",
                "Te explico qué haría y cuánto costaría.",
              ],
              [
                "04",
                "Lo hacemos",
                "Me encargo de la parte técnica y lo dejo funcionando.",
              ],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span className="text-sm font-bold text-[#ff5c35]">
                  {number}
                </span>

                <h3 className="mt-7 text-xl font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Sobre mí
              </span>

              <div className="relative mt-7 max-w-[360px]">
                <div className="absolute -bottom-5 -right-5 z-10 rounded-2xl bg-[#171717] px-5 py-4 text-sm font-semibold text-white">
                  Desarrollador
                  <br />
                  <span className="text-[#ff5c35]">+</span> soluciones
                </div>

                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#dedbd2]">
                  <img
                    src="/images/adri.jpg"
                    alt="Adri"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-6xl">
                Me gusta entender primero el problema y después pensar en la
                tecnología.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/55">
                Mi formación y experiencia están principalmente relacionadas
                con el desarrollo de software. He trabajado en entornos
                profesionales y también he desarrollado proyectos propios para
                aprender, probar ideas y entender cómo construir productos
                reales.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/70">
                Ahora quiero utilizar esa parte técnica para ayudar
                directamente a pequeños negocios, sin convertir cada problema
                en un proyecto enorme.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-black/10 bg-[#f5f3ee] p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/30">
                    Formación
                  </span>

                  <p className="mt-5 font-semibold">
                    CFGS Desarrollo de Aplicaciones Multiplataforma
                  </p>

                  <p className="mt-2 text-sm text-black/40">
                    2023 — 2025
                  </p>

                  <p className="mt-5 font-semibold">
                    CFGM Sistemas Microinformáticos y Redes
                  </p>

                  <p className="mt-2 text-sm text-black/40">
                    2021 — 2023
                  </p>
                </div>

                <div className="rounded-3xl border border-black/10 bg-[#f5f3ee] p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/30">
                    Experiencia
                  </span>

                  <p className="mt-5 font-semibold">
                    Desarrollo de aplicaciones
                  </p>

                  <p className="mt-2 text-sm leading-6 text-black/40">
                    Entorno Viewnext / CaixaBank
                    <br />
                    2024 — 2025
                  </p>

                  <p className="mt-5 text-sm leading-6 text-black/50">
                    Java · Spring Boot · JSP · SQL · APIs REST · Desarrollo
                    web
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Java",
                  "Spring Boot",
                  "PostgreSQL",
                  "SQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="bg-[#f5f3ee] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5c35]">
                Mi forma de trabajar
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] md:text-5xl">
                Directo.
                <br />
                Claro.
                <br />
                Sin humo.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-7">
                <span className="text-3xl font-black text-[#ff5c35]">
                  01
                </span>

                <h3 className="mt-12 text-xl font-bold">
                  Trato directo
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  Hablas directamente conmigo. No hay una cadena de personas
                  entre tu negocio y quien desarrolla la solución.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7">
                <span className="text-3xl font-black text-[#ff5c35]">
                  02
                </span>

                <h3 className="mt-12 text-xl font-bold">
                  Lo necesario
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  Si algo puede resolverse de forma sencilla, no tiene sentido
                  convertirlo en algo complicado.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7">
                <span className="text-3xl font-black text-[#ff5c35]">
                  03
                </span>

                <h3 className="mt-12 text-xl font-bold">
                  Explicado
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  Te explico qué hacemos, para qué sirve y qué puedes esperar
                  antes de empezar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="bg-[#ff5c35] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Contacto
              </span>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-8xl">
                ¿HABLAMOS?
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
                Cuéntame qué haces, qué te gustaría mejorar y vemos juntos si
                puedo ayudarte.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-3">
              <a
                href="https://wa.me/TU_NUMERO"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-[#171717] px-6 py-5 font-semibold text-white transition hover:bg-white hover:text-[#171717]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={21} />
                  Hablar por WhatsApp
                </span>

                <ArrowUpRight
                  size={21}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="mailto:TU_EMAIL"
                className="group flex items-center justify-between rounded-2xl border border-black/20 px-6 py-5 font-semibold transition hover:bg-white"
              >
                Email
                <ArrowUpRight
                  size={21}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ADRI<span className="text-[#ff5c35]">.</span>
          </p>

          <p>© 2026 · Soluciones digitales para negocios locales.</p>
        </div>
      </footer>
    </main>
  );
}