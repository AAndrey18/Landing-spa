import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Clapperboard,
  ExternalLink,
  FileText,
  MessageSquareQuote,
  Play,
  type LucideIcon,
} from "lucide-react";
import { projectLinks } from "./project-links";

type Resource = {
  number: string;
  title: string;
  description: string;
  action: string;
  href: string;
  icon: LucideIcon;
  fileName?: string;
};

const resources: Resource[] = [
  {
    number: "01",
    title: "Video promocional de la SPA",
    description:
      "Una introducción breve al concepto, la propuesta de valor y la experiencia de El Palacio.",
    action: "Ver video promocional",
    href: projectLinks.promotionalVideo,
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Portafolio en Vercel",
    description:
      "Sitio personal con una selección de proyectos, proceso de trabajo y experiencia técnica.",
    action: "Visitar portafolio",
    href: projectLinks.portfolio,
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Video tutorial de la SPA",
    description:
      "Recorrido guiado por las funciones, vistas principales y flujo de uso de la aplicación final.",
    action: "Ver video tutorial",
    href: projectLinks.tutorialVideo,
    icon: Play,
  },
  {
    number: "04",
    title: "Documento SRS",
    description:
      "Especificación de requisitos, alcance, historias de usuario y evidencia de pruebas del proyecto.",
    action: "Descargar documento SRS",
    href: projectLinks.srsDocument,
    icon: FileText,
    fileName: "SRS-El-Palacio.docx",
  },
  {
    number: "05",
    title: "Video testimonial",
    description:
      "Testimonio sobre la experiencia, el valor del producto y los resultados obtenidos con la SPA.",
    action: "Ver video testimonial",
    href: projectLinks.testimonialVideo,
    icon: MessageSquareQuote,
  },
  {
    number: "06",
    title: "SPA final: El Palacio",
    description:
      "Versión desplegada y funcional del proyecto, disponible para explorar directamente en línea.",
    action: "Abrir SPA final",
    href: projectLinks.finalSpa,
    icon: ExternalLink,
  },
];

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  const available = Boolean(resource.href);

  return (
    <article className="resource-card group flex min-h-[320px] flex-col rounded-[1.75rem] border border-slate/20 bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs font-semibold tracking-[0.18em] text-slate">
          {resource.number}
        </span>
        <div className="icon-shell grid size-12 place-items-center rounded-2xl bg-mist text-navy">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </div>
      </div>

      <div className="mt-9 flex-1">
        <div
          className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.13em] ${
            available
              ? "bg-mist text-navy"
              : "bg-[#F1F3F5] text-[#687482]"
          }`}
        >
          {available && <Check aria-hidden="true" className="size-3" strokeWidth={2.4} />}
          {available ? "Disponible" : "Pendiente de integrar"}
        </div>
        <h2 className="max-w-[18ch] text-[1.35rem] font-semibold leading-tight tracking-[-0.025em] text-navy">
          {resource.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink/70">{resource.description}</p>
      </div>

      {available ? (
        <a
          aria-label={`${resource.action} (abre en una pestaña nueva)`}
          className="resource-link mt-7 inline-flex min-h-11 items-center justify-between gap-3 border-t border-slate/15 pt-5 text-sm font-semibold text-navy outline-none"
          download={resource.fileName}
          href={resource.href}
          rel="noreferrer"
          target="_blank"
        >
          <span>{resource.action}</span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      ) : (
        <div
          aria-disabled="true"
          className="mt-7 inline-flex min-h-11 cursor-not-allowed items-center justify-between gap-3 border-t border-slate/15 pt-5 text-sm font-semibold text-ink/35"
        >
          <span>Enlace por integrar</span>
          <span aria-hidden="true">—</span>
        </div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-shell overflow-hidden bg-navy text-white">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
        >
          <a
            aria-label="Ir al inicio"
            className="inline-flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-mist"
            href="#inicio"
          >
            <span className="grid size-10 place-items-center rounded-xl border border-white/20 bg-white/10 font-mono text-sm font-semibold tracking-tight">
              EP
            </span>
            <span className="text-sm font-semibold tracking-wide">El Palacio</span>
          </a>
          <a
            className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-white/85 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mist sm:inline-flex"
            href="#recursos"
          >
            Ver entrega
            <ArrowDown aria-hidden="true" className="size-3.5" />
          </a>
        </nav>

        <div
          className="hero-content mx-auto grid min-h-[650px] max-w-7xl items-end gap-12 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 lg:grid-cols-[1.35fr_0.65fr] lg:px-12 lg:pb-24 lg:pt-24"
          id="inicio"
        >
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-steel">
              <span className="h-px w-9 bg-steel/70" />
              Presentación académica · SPA
            </p>
            <h1 className="max-w-4xl text-balance text-[clamp(3.35rem,8vw,7rem)] font-semibold leading-[0.91] tracking-[-0.065em]">
              Una entrega.
              <span className="mt-1 block font-serif font-normal italic text-mist">
                Todo el proyecto.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Un punto de acceso ordenado para revisar la documentación, los videos,
              el portafolio y la versión final de{" "}
              <strong className="font-semibold text-white">El Palacio</strong>.
            </p>
          </div>

          <aside className="mb-1 border-l border-white/20 pl-6 lg:justify-self-end lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
              Proyecto final
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
              Aplicación web de comercio electrónico con flujos reactivos para compra,
              publicación y trueque.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-white/75">
              <span className="rounded-full border border-white/15 px-3 py-1.5">React</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">SPA</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">
                Diseño responsivo
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="bg-canvas px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        id="recursos"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 border-b border-slate/20 pb-9 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                Entregables del proyecto
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-navy sm:text-5xl">
                Evidencias y accesos
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/65 md:text-right">
              Los recursos aparecen en el orden de revisión solicitado. Los que aún no tienen
              enlace quedan identificados sin generar redirecciones vacías.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.number} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate/15 bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold text-navy">El Palacio</span> · Presentación de proyecto SPA
          </p>
          <a
            className="inline-flex items-center gap-2 font-semibold text-slate outline-none hover:text-navy focus-visible:ring-2 focus-visible:ring-slate"
            href="#inicio"
          >
            Volver al inicio
            <ArrowUpRight aria-hidden="true" className="size-3.5 -rotate-45" />
          </a>
        </div>
      </footer>
    </main>
  );
}
