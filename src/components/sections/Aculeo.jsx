import Reveal from '../ui/Reveal';
import ImageSlot from '../ui/ImageSlot';
import Button from '../ui/Button';
import { AculeoIcon } from '../ui/icons';
import { aculeoHighlights } from '../../data/content';

export default function Aculeo() {
  return (
    <Reveal
      as="section"
      aria-label="Laguna Aculeo"
      className="relative flex min-h-[clamp(520px,62vw,660px)] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <ImageSlot src="/assets/aculeo.jpg" position="center 65%" placeholder="Panorámica de Laguna Aculeo" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,29,64,.35) 0%, rgba(0,29,64,.68) 100%)' }}
      />
      <div className="relative z-[2] mx-auto flex w-full max-w-[960px] flex-col items-center gap-[22px] px-[clamp(24px,6vw,72px)] py-[clamp(48px,7vw,96px)] text-center">
        <span className="inline-block rounded-[4px] bg-gold px-4 py-[7px] font-sans text-[11px] font-bold tracking-[0.28em] text-navy">
          EXTRA
        </span>
        <h2 className="text-[clamp(34px,6.5vw,68px)] font-semibold leading-[1.05] tracking-[0.03em] text-cream">
          LAGUNA ACULEO
        </h2>
        <p className="max-w-[560px] font-sans text-[clamp(15px,2vw,20px)] font-normal text-[#EAE3D4]">
          Proyectos exclusivos en un entorno natural único
        </p>

        <div className="mt-3.5 grid w-full max-w-[820px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(20px,3vw,40px)]">
          {aculeoHighlights.map((h, i) => (
            <div key={h} className="flex flex-col items-center gap-3">
              <span className="text-gold">
                <AculeoIcon index={i} />
              </span>
              <p className="font-sans text-[15px] font-medium leading-[1.4] text-[#F1EBDD]">{h}</p>
            </div>
          ))}
        </div>

        <Button
          variant="gold"
          href="https://lauken.cl/valles-de-rangue-2"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-[40px] py-4 min-h-[52px]"
        >
          VER PROYECTOS EN LAGUNA ACULEO
        </Button>
      </div>
    </Reveal>
  );
}
