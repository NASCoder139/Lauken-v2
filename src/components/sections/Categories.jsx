import Reveal from '../ui/Reveal';
import ImageSlot from '../ui/ImageSlot';
import { ArrowRight } from '../ui/icons';
import { categories } from '../../data/content';

export default function Categories() {
  return (
    <section
      aria-label="Qué estás buscando"
      className="px-[clamp(20px,5vw,72px)] pb-[clamp(60px,8vw,100px)] pt-[clamp(40px,6vw,80px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-[clamp(36px,5vw,60px)] text-center">
          <span className="font-sans text-[12px] tracking-[0.34em] text-gold">EXPLORA</span>
          <h2 className="mt-3.5 text-[clamp(30px,5vw,52px)] font-semibold">¿Qué estás buscando?</h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-[clamp(12px,2.4vw,26px)] md:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal
              as="a"
              key={c.id}
              href="#"
              delay={i * 0.06}
              className="group relative block aspect-[3/4] min-h-[200px] sm:min-h-[280px] overflow-hidden rounded-[16px] shadow-[0_18px_44px_-26px_rgba(0,29,64,.5)] ring-1 ring-inset ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(0,29,64,.6)]"
            >
              <ImageSlot zoom src={c.img} placeholder={c.placeholder} />
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,29,64,0) 40%, rgba(0,29,64,.55) 100%)',
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-[clamp(12px,2.6vw,30px)]">
                <h3 className="text-[clamp(16px,2.6vw,30px)] font-semibold leading-tight text-cream">{c.title}</h3>
                <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
