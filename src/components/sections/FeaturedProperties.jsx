import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import ImageSlot from '../ui/ImageSlot';
import Button from '../ui/Button';
import { FeatureIcon } from '../ui/icons';
import { properties } from '../../data/content';

// Separacion entre tarjetas. Se expone como --gap para que el ancho de cada
// tarjeta pueda descontarla y calzar dos por pantalla en desktop.
const GAP = 'clamp(24px, 3vw, 36px)';
const INTERVALO = 5000;

export default function FeaturedProperties() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [paginas, setPaginas] = useState(1);
  const [pagina, setPagina] = useState(0);
  const [enPausa, setEnPausa] = useState(false);
  const [aLaVista, setALaVista] = useState(true);
  const [pestanaActiva, setPestanaActiva] = useState(true);

  // Cuantas "pantallas" ocupa el carrusel con el ancho actual: dos tarjetas
  // por vista en desktop y una por vista en movil.
  const medir = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    setPaginas(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
    setPagina(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [medir]);

  // No hace falta rotar una seccion que nadie esta mirando.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setALaVista(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    const onVis = () => setPestanaActiva(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  const irA = useCallback((i) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [reduceMotion]);

  const rotando = !enPausa && aLaVista && pestanaActiva && !reduceMotion && paginas > 1;

  useEffect(() => {
    if (!rotando) return;
    const id = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const siguiente = (Math.round(el.scrollLeft / el.clientWidth) + 1) % paginas;
      el.scrollTo({ left: siguiente * el.clientWidth, behavior: 'smooth' });
    }, INTERVALO);
    return () => clearInterval(id);
  }, [rotando, paginas]);

  return (
    <section
      ref={sectionRef}
      aria-label="Propiedades destacadas"
      className="bg-cream-2 px-[clamp(20px,5vw,72px)] pb-[clamp(40px,5vw,68px)] pt-[clamp(32px,4vw,56px)]"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="mb-[clamp(26px,3.5vw,44px)] text-center">
          <span className="font-sans text-[12px] tracking-[0.34em] text-gold">SELECCIÓN</span>
          <h2 className="mt-3.5 text-[clamp(30px,5vw,52px)] font-semibold">Propiedades Destacadas</h2>
        </Reveal>

        {/* El Reveal envuelve el carrusel completo y no cada tarjeta: dentro de un
            contenedor con scroll horizontal, las tarjetas fuera de vista quedarian
            en opacity 0 hasta que el usuario las alcanza. */}
        <Reveal>
          <div
            ref={scrollerRef}
            onScroll={() => {
              const el = scrollerRef.current;
              if (el && el.clientWidth) setPagina(Math.round(el.scrollLeft / el.clientWidth));
            }}
            onMouseEnter={() => setEnPausa(true)}
            onMouseLeave={() => setEnPausa(false)}
            onFocusCapture={() => setEnPausa(true)}
            onBlurCapture={() => setEnPausa(false)}
            onTouchStart={() => setEnPausa(true)}
            style={{ '--gap': GAP, gap: 'var(--gap)' }}
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {properties.map((p, idx) => (
              <article
                key={p.id}
                className="group flex shrink-0 basis-full snap-start flex-col overflow-hidden rounded-[16px] bg-cream shadow-[0_22px_54px_-30px_rgba(0,29,64,.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-30px_rgba(0,29,64,.6)] md:basis-[calc((100%_-_var(--gap))_/_2)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <ImageSlot zoom src={p.img} position={p.imgPos || (idx % 2 === 0 ? 'center 35%' : 'center 60%')} placeholder={p.placeholder} />
                  <span
                    className="absolute left-4 top-4 rounded-[4px] px-3.5 py-2 font-sans text-[11px] font-semibold tracking-[0.14em] text-cream"
                    style={{ background: p.badgeColor }}
                  >
                    {p.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3.5 p-[clamp(20px,2.4vw,28px)]">
                  <div>
                    <h3 className="text-[clamp(23px,2.6vw,30px)] font-semibold">{p.title}</h3>
                    <p className="mt-1.5 font-sans text-[15px] text-[#6a6f73]">{p.subtitle}</p>
                  </div>
                  <p className="font-display text-[clamp(24px,3vw,32px)] font-semibold text-green">{p.price}</p>
                  <div className="h-px bg-[#ECE3D0]" />
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {p.features.map((f, i) => (
                      <li key={f} className="flex items-center gap-3 font-sans text-[15px] text-[#4c5155]">
                        <span className="flex-shrink-0 text-gold">
                          <FeatureIcon index={idx * 3 + i} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full min-h-[52px]"
                  >
                    VER PROPIEDAD
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {paginas > 1 && (
            <div className="mt-[clamp(20px,2.5vw,30px)] flex items-center justify-center gap-2.5">
              {Array.from({ length: paginas }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => irA(i)}
                  aria-label={`Ver propiedades ${i + 1} de ${paginas}`}
                  aria-current={i === pagina}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === pagina ? 'w-7 bg-navy' : 'w-2.5 bg-navy/25 hover:bg-navy/45'
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
