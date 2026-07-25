import Reveal from '../ui/Reveal';
import ImageSlot from '../ui/ImageSlot';
import Button from '../ui/Button';
import { FeatureIcon } from '../ui/icons';
import { properties } from '../../data/content';

export default function FeaturedProperties() {
  return (
    <section
      aria-label="Propiedades destacadas"
      className="bg-cream-2 px-[clamp(20px,5vw,72px)] pb-[clamp(40px,5vw,68px)] pt-[clamp(32px,4vw,56px)]"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="mb-[clamp(26px,3.5vw,44px)] text-center">
          <span className="font-sans text-[12px] tracking-[0.34em] text-gold">SELECCIÓN</span>
          <h2 className="mt-3.5 text-[clamp(30px,5vw,52px)] font-semibold">Propiedades Destacadas</h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,3vw,36px)]">
          {properties.map((p, idx) => (
            <Reveal
              as="article"
              key={p.id}
              delay={idx * 0.08}
              className="group flex flex-col overflow-hidden rounded-[16px] bg-cream shadow-[0_22px_54px_-30px_rgba(0,29,64,.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-30px_rgba(0,29,64,.6)]"
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
              <div className="flex flex-col gap-3.5 p-[clamp(20px,2.4vw,28px)]">
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
                  className="mt-2 w-full min-h-[52px]"
                >
                  VER PROPIEDAD
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
